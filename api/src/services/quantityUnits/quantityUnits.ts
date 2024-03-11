import type {
  QueryResolvers,
  QuantityUnitRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const quantityUnits: QueryResolvers['quantityUnits'] = () => {
  return db.quantityUnit.findMany()
}

export const quantityUnit: QueryResolvers['quantityUnit'] = ({ id }) => {
  return db.quantityUnit.findUnique({
    where: { id },
  })
}

export const QuantityUnit: QuantityUnitRelationResolvers = {
  products: (_obj, { root }) => {
    return db.quantityUnit.findUnique({ where: { id: root?.id } }).products()
  },
  quantityConversionsFrom: (_obj, { root }) => {
    return db.quantityUnit
      .findUnique({ where: { id: root?.id } })
      .quantityConversionsFrom()
  },
  quantityConversionsTo: (_obj, { root }) => {
    return db.quantityUnit
      .findUnique({ where: { id: root?.id } })
      .quantityConversionsTo()
  },
  prices: (_obj, { root }) => {
    return db.quantityUnit.findUnique({ where: { id: root?.id } }).prices()
  },
}
