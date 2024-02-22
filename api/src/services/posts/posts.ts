import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({ where: { id } })
}

/**
 * Define the resolvers for the Post schema type
 * This matches the shape of the `Post` schema in `api/src/graphql/posts.sdl.ts`
 */
export const Post = {
  user: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).user(),
}
