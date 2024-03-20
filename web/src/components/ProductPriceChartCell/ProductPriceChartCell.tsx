import Chart from 'react-apexcharts'
import type { pricesForProduct, pricesForProductVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  pricesForProduct,
  pricesForProductVariables
> = gql`
  query pricesForProduct(
    $productId: Int!
    $startDate: DateTime!
    $endDate: DateTime!
  ) {
    pricesForProduct(
      productId: $productId
      startDate: $startDate
      endDate: $endDate
    ) {
      date
      price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<pricesForProductVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  pricesForProduct,
  productId,
  productName,
}: CellSuccessProps<pricesForProduct, pricesForProductVariables>) => {
  const data = {
    options: {
      markers: {
        size: 4,
      },
      chart: {
        id: `chart-product-id-${productId}`,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      title: {
        text: productName,
        align: 'left',
        style: {
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: '20px',
        },
      },
    },
    series: [
      {
        name: 'Price',
        data: pricesForProduct
          .map((price) => [new Date(price.date).getTime(), price.price])
          .sort((a, b) => a[0] - b[0]),
      },
    ],
  }
  return (
    <div className="w-full">
      <Chart
        options={data.options}
        series={data.series}
        type="line"
        width="100%"
      />
    </div>
  )
}
