import type {
  QueryResolvers,
  QuantityConversionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const quantityConversions: QueryResolvers['quantityConversions'] =
  () => {
    return db.quantityConversion.findMany()
  }

export const quantityConversion: QueryResolvers['quantityConversion'] = ({
  id,
}) => {
  return db.quantityConversion.findUnique({
    where: { id },
  })
}

export const QuantityConversion: QuantityConversionRelationResolvers = {
  fromUnit: (_obj, { root }) => {
    return db.quantityConversion
      .findUnique({ where: { id: root?.id } })
      .fromUnit()
  },
  toUnit: (_obj, { root }) => {
    return db.quantityConversion
      .findUnique({ where: { id: root?.id } })
      .toUnit()
  },
}
