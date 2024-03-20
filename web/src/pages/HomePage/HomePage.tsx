import { Metadata } from '@redwoodjs/web'

import PriceChangeCell from 'src/components/PriceChangeCell'
import TopPurchasedProductsCell from 'src/components/TopPurchasedProductsCell'
import { useDatesStore } from 'src/stores'

const HomePage = () => {
  const { dates } = useDatesStore()

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div>
            <PriceChangeCell
              startDate={dates.startDate}
              endDate={dates.endDate}
              direction="desc"
              seeMoreLink={true}
            />
          </div>
          <div className="mt-4">
            <PriceChangeCell
              startDate={dates.startDate}
              endDate={dates.endDate}
              direction="asc"
              seeMoreLink={true}
            />
          </div>
        </div>
        <div className="mt-4 w-full  lg:ml-4 lg:mt-0 lg:w-1/3">
          <h2 className="text-2xl">Top Products</h2>
          <div className="mt-1 flex flex-col items-center gap-4">
            <TopPurchasedProductsCell
              startDate={dates.startDate}
              endDate={dates.endDate}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
