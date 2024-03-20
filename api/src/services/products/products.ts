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

export const topPurchasedProducts: QueryResolvers['topPurchasedProducts'] =
  async ({ startDate, endDate, limit = 5, offset = 0 }) => {
    // get the products with most number of price entries in the given date range, return count as a field in the response
    return db.product.findMany({
      orderBy: {
        prices: {
          _count: 'desc',
        },
      },
      take: limit,
      skip: offset,
      where: {
        prices: {
          some: {
            date: {
              gte: startDate,
              lte: endDate,
            },
          },
        },
      },
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
