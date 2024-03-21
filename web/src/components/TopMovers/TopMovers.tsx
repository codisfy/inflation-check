import { PriceChange } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import {
  PriceRowDesktop,
  PriceRowMobile,
} from 'src/components/TopMovers/PriceRows'

type Props = {
  priceChanges: PriceChange[]
  direction: string
  seeMoreLink?: boolean
}

const TopMovers = ({ priceChanges, direction, seeMoreLink = false }: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">
          {direction === 'desc' ? 'Most Inflated' : 'Least Inflated'}
        </h2>
        {seeMoreLink && (
          <Link
            className="text-blue-600 opacity-90 hover:text-blue-500"
            to={routes.inflationList({ direction })}
          >
            See More
          </Link>
        )}
      </div>
      <div>
        <div className="xs:max-w-xl mt-1 hidden w-full max-w-xl sm:max-w-xl md:block md:max-w-7xl md:overflow-auto 2xl:max-w-none">
          <table className="font-inter w-full table-auto border-separate border-spacing-y-1.5 overflow-scroll text-left md:overflow-auto">
            <thead className="w-full rounded-lg bg-gray-300 text-base font-semibold text-accent-900">
              <tr className="">
                <th className="whitespace-nowrap rounded-l-lg py-3 pl-3 text-base font-normal sm:text-sm">
                  Product
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal sm:text-sm">
                  Oldest Price
                </th>
                <th className="whitespace-nowrap py-3 pl-2 text-base font-normal sm:text-sm">
                  Newest Price
                </th>
                <th className="whitespace-nowrap rounded-r-lg py-3 pl-2 text-base font-normal  sm:text-sm">
                  Change
                </th>
              </tr>
            </thead>
            <tbody>
              {(!priceChanges || priceChanges.length === 0) && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-5 text-center text-sm font-normal text-gray-500"
                  >
                    No products found for the selected time range
                  </td>
                </tr>
              )}
              {priceChanges &&
                priceChanges.map((priceChange) => {
                  const percentChange = priceChange.percentChange
                  return (
                    <PriceRowDesktop
                      key={priceChange.productId}
                      priceChange={priceChange}
                      percentChange={percentChange}
                    />
                  )
                })}
            </tbody>
          </table>
          {/* Card view for mobile devices */}
        </div>
        <div className="md:hidden">
          {!priceChanges || priceChanges.length === 0 ? (
            <div className="py-5 text-center text-sm font-normal text-gray-500">
              No products found for the selected time range
            </div>
          ) : (
            priceChanges.map((priceChange) => {
              const percentChange = priceChange.percentChange
              return (
                <PriceRowMobile
                  key={priceChange.productId}
                  priceChange={priceChange}
                  percentChange={percentChange}
                />
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default TopMovers
