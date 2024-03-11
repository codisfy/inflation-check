import type { QueryResolvers, CategoryRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const categories: QueryResolvers['categories'] = () => {
  return db.category.findMany()
}

export const category: QueryResolvers['category'] = ({ id }) => {
  return db.category.findUnique({
    where: { id },
  })
}

export const Category: CategoryRelationResolvers = {
  products: (_obj, { root }) => {
    return db.category.findUnique({ where: { id: root?.id } }).products()
  },
}
