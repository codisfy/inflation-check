export const schema = gql`
  type QuantityConversion {
    id: Int!
    fromUnitId: Int!
    toUnitId: Int!
    conversionFactor: Float!
    fromUnit: QuantityUnit!
    toUnit: QuantityUnit!
  }

  type Query {
    quantityConversions: [QuantityConversion!]! @requireAuth
  }

  input CreateQuantityConversionInput {
    fromUnitId: Int!
    toUnitId: Int!
    conversionFactor: Float!
  }

  input UpdateQuantityConversionInput {
    fromUnitId: Int
    toUnitId: Int
    conversionFactor: Float
  }
`
