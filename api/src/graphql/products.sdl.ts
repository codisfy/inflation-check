export const schema = gql`
  type Product {
    id: Int!
    name: String!
    genericName: String
    description: String
    categoryId: Int!
    baseUnitId: Int!
    meta: JSON
    category: Category!
    baseUnit: QuantityUnit!
    prices: [Price]!
  }

  type Query {
    products: [Product!]! @requireAuth
    topPurchasedProducts(
      startDate: DateTime!
      endDate: DateTime!
      limit: Int
      offset: Int
    ): [Product]! @skipAuth
  }

  input CreateProductInput {
    name: String!
    genericName: String
    description: String
    categoryId: Int!
    baseUnitId: Int!
    meta: JSON
  }

  input UpdateProductInput {
    name: String
    genericName: String
    description: String
    categoryId: Int
    baseUnitId: Int
    meta: JSON
  }
`
