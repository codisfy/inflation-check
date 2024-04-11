import { useState } from 'react'

import type {
  topPriceChanges,
  topPriceChangesVariables,
  PriceChange,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
  useQuery,
} from '@redwoodjs/web'

import TopMovers from 'src/components/TopMovers/TopMovers'

export type variablesWithTitle = topPriceChangesVariables & {
  seeMoreLink?: boolean
}

export const QUERY: TypedDocumentNode<PriceChange[], variablesWithTitle> = gql`
  query topPriceChanges(
    $startDate: DateTime!
    $endDate: DateTime!
    $direction: String = "asc"
    $limit: Int = 5
    $offset: Int = 0
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

export const Failure = ({ error }: CellFailureProps<variablesWithTitle>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  topPriceChanges,
  direction,
  seeMoreLink,
  limit,
  offset,
  startDate,
  endDate,
}: CellSuccessProps<topPriceChanges> & variablesWithTitle) => {
  const [priceData, setPriceData] = useState(topPriceChanges)
  const [newOffset, setOffset] = useState(offset || 0)
  const [total, setTotal] = useState(topPriceChanges.length)
  const [numberOfLoads, setNumberOfLoads] = useState(1)
  // TODO: super bad leads to double queries
  const { fetchMore } = useQuery(QUERY, {
    variables: {
      startDate,
      endDate,
      direction,
      limit: limit,
      offset: newOffset,
    },
  })
  const loadMore = async () => {
    const pageOffset = newOffset + limit
    console.log('loadMore', pageOffset)
    const { data, error } = await fetchMore({
      variables: {
        startDate,
        endDate,
        direction,
        limit: limit,
        offset: pageOffset,
      },
    })
    if (error) {
      console.error('Error loading more', error)
    }
    setPriceData([...priceData, ...data.topPriceChanges])

    setNumberOfLoads(numberOfLoads + 1)
    setTotal(total + data.topPriceChanges.length)
    setOffset(pageOffset)
  }

  return (
    <div>
      <TopMovers
        priceChanges={priceData}
        direction={direction}
        seeMoreLink={seeMoreLink}
      />
      {/*If there is not seem more link that means we are on the dashboard*/}
      {!seeMoreLink && (
        <div className="mt-4 flex justify-between">
          <Link to={routes.home()}>Back</Link>
          {total === numberOfLoads * limit && (
            <button
              type="button"
              className="ml-4 inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-blue-100 px-4 py-3 text-sm font-semibold text-blue-800 hover:bg-blue-200 disabled:pointer-events-none disabled:opacity-50 dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  )
}
