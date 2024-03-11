import type { QueryResolvers, PriceRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const prices: QueryResolvers['prices'] = () => {
  return db.price.findMany()
}

export const price: QueryResolvers['price'] = ({ id }) => {
  return db.price.findUnique({
    where: { id },
  })
}

export const Price: PriceRelationResolvers = {
  product: (_obj, { root }) => {
    return db.price.findUnique({ where: { id: root?.id } }).product()
  },
  store: (_obj, { root }) => {
    return db.price.findUnique({ where: { id: root?.id } }).store()
  },
  location: (_obj, { root }) => {
    return db.price.findUnique({ where: { id: root?.id } }).location()
  },
  quantityUnit: (_obj, { root }) => {
    return db.price.findUnique({ where: { id: root?.id } }).quantityUnit()
  },
}
