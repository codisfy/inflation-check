export const schema = gql`
  type QuantityUnit {
    id: Int!
    unitName: String!
    products: [Product]!
    quantityConversionsFrom: [QuantityConversion]!
    quantityConversionsTo: [QuantityConversion]!
    prices: [Price]!
  }

  type Query {
    quantityUnits: [QuantityUnit!]! @requireAuth
  }

  input CreateQuantityUnitInput {
    unitName: String!
  }

  input UpdateQuantityUnitInput {
    unitName: String
  }
`
