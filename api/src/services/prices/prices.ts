import type {
  PriceChange,
  PriceRelationResolvers,
  QueryResolvers,
  ResolverTypeWrapper,
} from 'types/graphql'

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
export const topPriceChanges: QueryResolvers['topPriceChanges'] = async ({
  startDate,
  endDate,
  direction = 'asc',
  limit = 5,
  offset = 0,
}): Promise<ResolverTypeWrapper<PriceChange>[]> => {
  if (direction.toUpperCase() !== 'ASC' && direction.toUpperCase() !== 'DESC') {
    throw new Error('Invalid direction specified')
  }

  const orderByDirection = direction.toUpperCase()

  const query = `
    WITH ProductPrices AS (SELECT p."productId",
                                  p."price",
                                  p."date"
                           FROM "Price" p
                           WHERE p."date" BETWEEN '${startDate.toISOString()}' AND '${endDate.toISOString()}'),
         PriceCount AS (SELECT "productId",
                               COUNT(*) AS price_records
                        FROM ProductPrices
                        GROUP BY "productId"
                        HAVING COUNT(*) > 1),
         RankedPrices AS (SELECT pp."productId",
                                 pp."price",
                                 pp."date",
                                 pr."name"                                                               AS "productName",
                                 pr."genericName",
                                 ROW_NUMBER() OVER (PARTITION BY pp."productId" ORDER BY pp."date")      AS rn_asc,
                                 ROW_NUMBER() OVER (PARTITION BY pp."productId" ORDER BY pp."date" DESC) AS rn_desc
                          FROM ProductPrices pp
                                 JOIN "Product" pr ON pp."productId" = pr."id"
                                 JOIN PriceCount pc ON pp."productId" = pc."productId"),
         OldestNewestPrices AS (SELECT a."productId",
                                       a."productName",
                                       a."genericName",
                                       a."price" AS "oldestPrice",
                                       a."date"  AS "oldestDate",
                                       b."price" AS "newestPrice",
                                       b."date"  AS "newestDate"
                                FROM RankedPrices a
                                       JOIN RankedPrices b ON a."productId" = b."productId" AND b.rn_desc = 1
                                WHERE a.rn_asc = 1),
         PriceIncreases AS (SELECT "productId",
                                   "productName",
                                   "genericName",
                                   "oldestPrice",
                                   "oldestDate",
                                   "newestPrice",
                                   "newestDate",
                                   (("newestPrice" - "oldestPrice") / "oldestPrice") * 100 AS "percentChange"
                            FROM OldestNewestPrices
                            WHERE "oldestPrice" > 0)
    SELECT *
    FROM PriceIncreases
    ORDER BY "percentChange" ${orderByDirection}
    LIMIT ${limit} OFFSET ${offset};
  `
  const results = db.$queryRawUnsafe(query)

  return results as Promise<ResolverTypeWrapper<PriceChange>[]>
}
