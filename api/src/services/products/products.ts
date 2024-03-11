import type { QueryResolvers, ProductRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const products: QueryResolvers['products'] = () => {
  return db.product.findMany()
}

export const product: QueryResolvers['product'] = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const Product: ProductRelationResolvers = {
  category: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).category()
  },
  baseUnit: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).baseUnit()
  },
  prices: (_obj, { root }) => {
    return db.product.findUnique({ where: { id: root?.id } }).prices()
  },
}
