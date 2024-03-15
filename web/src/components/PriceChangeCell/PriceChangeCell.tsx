import type {
  topPriceChanges,
  topPriceChangesVariables,
  PriceChange
} from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  PriceChange[],
  topPriceChangesVariables
> = gql`
  query topPriceChanges(
    $startDate: DateTime!
    $endDate: DateTime!
    $direction: String = "asc"
    $limit: Int
    $offset: Int
  ) {
    topPriceChanges(
      startDate: $startDate
      endDate: $endDate
      direction: $direction
      limit: $limit
      offset: $offset
    ) {
      productId
      productName
      genericName
      oldestPrice
      newestPrice
      oldestDate
      newestDate
      percentChange
      direction
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<topPriceChangesVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topPriceChanges,
}: CellSuccessProps<topPriceChanges, topPriceChangesVariables>) => {
  return <div>{JSON.stringify(topPriceChanges)}</div>
}
