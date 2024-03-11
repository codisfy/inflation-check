export const schema = gql`
  type Category {
    id: Int!
    name: String!
    products: [Product]!
  }

  type Query {
    categories: [Category!]! @requireAuth
  }

  input CreateCategoryInput {
    name: String!
  }

  input UpdateCategoryInput {
    name: String
  }
`
