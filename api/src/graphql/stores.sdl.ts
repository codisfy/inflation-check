export const schema = gql`
  type Store {
    id: Int!
    name: String!
    prices: [Price]!
  }

  type Query {
    stores: [Store!]! @requireAuth
  }

  input CreateStoreInput {
    name: String!
  }

  input UpdateStoreInput {
    name: String
  }
`
