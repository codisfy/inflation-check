export const schema = gql`
  type Location {
    id: Int!
    city: String!
    province: String!
    address: String!
    prices: [Price]!
  }

  type Query {
    locations: [Location!]! @requireAuth
  }

  input CreateLocationInput {
    city: String!
    province: String!
    address: String!
  }

  input UpdateLocationInput {
    city: String
    province: String
    address: String
  }
`
