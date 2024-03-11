import type { QueryResolvers, StoreRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const stores: QueryResolvers['stores'] = () => {
  return db.store.findMany()
}

export const store: QueryResolvers['store'] = ({ id }) => {
  return db.store.findUnique({
    where: { id },
  })
}

export const Store: StoreRelationResolvers = {
  prices: (_obj, { root }) => {
    return db.store.findUnique({ where: { id: root?.id } }).prices()
  },
}
