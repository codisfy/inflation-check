export const schema = gql`
  type Price {
    id: Int!
    productId: Int!
    storeId: Int
    locationId: Int
    quantityId: Int!
    price: Float!
    currency: String!
    date: DateTime!
    product: Product!
    store: Store
    location: Location
    quantityUnit: QuantityUnit!
  }

  type Query {
    prices: [Price!]! @requireAuth
  }

  input CreatePriceInput {
    productId: Int!
    storeId: Int
    locationId: Int
    quantityId: Int!
    price: Float!
    currency: String!
    date: DateTime!
  }

  input UpdatePriceInput {
    productId: Int
    storeId: Int
    locationId: Int
    quantityId: Int
    price: Float
    currency: String
    date: DateTime
  }
`
