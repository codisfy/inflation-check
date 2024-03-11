import type { QueryResolvers, LocationRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const locations: QueryResolvers['locations'] = () => {
  return db.location.findMany()
}

export const location: QueryResolvers['location'] = ({ id }) => {
  return db.location.findUnique({
    where: { id },
  })
}

export const Location: LocationRelationResolvers = {
  prices: (_obj, { root }) => {
    return db.location.findUnique({ where: { id: root?.id } }).prices()
  },
}
