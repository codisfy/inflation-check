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

  type PricesWithProduct {
    prices: [Price!]!
    product: Product
  }
  type Query {
    prices: [Price!]! @requireAuth
    topPriceChanges(
      startDate: DateTime!
      endDate: DateTime!
      direction: String
      limit: Int
      offset: Int
    ): [PriceChange]! @skipAuth
    pricesForProduct(
      productId: Int!
      startDate: DateTime!
      endDate: DateTime!
    ): PricesWithProduct! @skipAuth
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
    oldestPrice: Float
    newestPrice: Float
    oldestDate: DateTime
    newestDate: DateTime
    percentChange: Float
    direction: String
  }
`
