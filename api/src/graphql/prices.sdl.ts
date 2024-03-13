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

  type PriceChange {
    productId: Int
    productName: String
    genericName: String
    oldestPrice: Float
    newestPrice: Float
    oldestDate: DateTime
    newestDate: DateTime
    percentChange: Float
    direction: String
  }

  type Query {
    topPriceChanges(
      startDate: DateTime!
      endDate: DateTime!
      direction: String
      limit: Int
      offset: Int
    ): [PriceChange]! @skipAuth
  }
`
