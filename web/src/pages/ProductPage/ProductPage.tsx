import { useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ProductPriceChartCell from 'src/components/ProductPriceChartCell'
import { useDatesStore } from 'src/stores'

const ProductPage = () => {
  const { id } = useParams()
  const { dates } = useDatesStore()
  return (
    <>
      <Metadata title="Product" description="Product page" />
      <div className="flex justify-center">
        <ProductPriceChartCell
          productId={id}
          startDate={dates.startDate}
          endDate={dates.endDate}
        />
      </div>
    </>
  )
}

export default ProductPage
