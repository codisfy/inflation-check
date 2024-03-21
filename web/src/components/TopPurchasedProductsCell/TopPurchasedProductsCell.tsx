import type {
  TopPurchasedProductsQuery,
  TopPurchasedProductsQueryVariables,
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import ProductPriceChartCell from 'src/components/ProductPriceChartCell'

export const QUERY: TypedDocumentNode<
  TopPurchasedProductsQuery,
  TopPurchasedProductsQueryVariables
> = gql`
  query TopPurchasedProductsQuery(
    $startDate: DateTime!
    $endDate: DateTime!
    $limit: Int = 5
    $offset: Int = 0
  ) {
    topPurchasedProducts(
      startDate: $startDate
      endDate: $endDate
      limit: $limit
      offset: $offset
    ) {
      id
      name
      genericName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topPurchasedProducts,
  startDate,
  endDate,
}: CellSuccessProps<TopPurchasedProductsQuery> &
  TopPurchasedProductsQueryVariables) => {
  return (
    <>
      {topPurchasedProducts.map((item) => {
        return (
          <ProductPriceChartCell
            key={item.id}
            productId={item.id}
            startDate={startDate}
            endDate={endDate}
          />
        )
      })}
    </>
  )
}
