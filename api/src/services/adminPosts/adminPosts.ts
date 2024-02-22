import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'
import { ForbiddenError } from '@redwoodjs/graphql-server'

export const adminPosts: QueryResolvers['adminPosts'] = () => {
  return db.post.findMany({ where: { userId: context.currentUser.id } })
}

export const adminPost: QueryResolvers['adminPost'] = ({ id }) => {
  return db.post.findFirst({
    where: { id, userId: context.currentUser.id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: { ...input, userId: context.currentUser.id }
  })
}

export const updatePost: MutationResolvers['updatePost'] = async ({ id, input }) => {
  await verifyOwnership(id)
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = async ({ id }) => {
  await verifyOwnership(id)
  return db.post.delete({
    where: { id },
  })
}

const verifyOwnership = async (id: number) => {
  if (!(await adminPost({ id }))) {
    throw new ForbiddenError("You don't have access to this post")
  }
}
