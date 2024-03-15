import { PriceChange } from 'types/graphql'

const TopMovers = ({
  priceChanges,
  title,
}: {
  priceChanges: PriceChange[]
  title: string
}) => {
  return (
    <div>
      <h2>{title}</h2>
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
                  let percentChange = parseFloat((
                    priceChange.percentChange
                  ).toFixed(2))
                  return (
                    <tr
                      key={priceChange.productId}
                      className="cursor-pointer drop-shadow-sm"
                    >
                      <td className="rounded-l-lg border-y border-l py-5 pl-3 text-sm font-normal">
                        <div className="flex flex-col whitespace-nowrap">
                          <span className="text-xs font-semibold md:text-sm">
                            {priceChange.genericName}
                          </span>
                          <span className="mt-1 text-xs text-gray-500 md:text-sm">
                            {priceChange.productName}
                          </span>
                        </div>
                      </td>
                      <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  md:text-sm">
                        <div className="flex flex-col whitespace-nowrap">
                          <span className="text-xs font-semibold md:text-sm ">
                            CAD {priceChange.oldestPrice}
                          </span>
                          <span className="mt-1 text-xs text-gray-500 md:text-sm">
                            {new Date(
                              priceChange.oldestDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </td>
                      <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal md:text-sm">
                        <div className="flex flex-col whitespace-nowrap">
                          <span className="text-xs font-semibold md:text-sm ">
                            CAD {priceChange.newestPrice}
                          </span>
                          <span className="mt-1 text-xs text-gray-500 md:text-sm">
                            {new Date(
                              priceChange.newestDate
                            ).toLocaleDateString()}
                          </span>
                        </div>
                      </td>
                      <td className="rounded-r-lg border-y border-r border-[#7851BD]/20 px-2 py-5 text-xs font-semibold md:text-sm">
                        {percentChange > 0 ? (
                          <div className="flex items-center text-red-500 ">
                            {percentChange}%
                            <svg className="text-red-500 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                            </svg>

                          </div>
                        ) : percentChange < 0 ? (
                          <div className="flex items-center text-green-600">
                            {percentChange}%
                            <svg className="text-green-600 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                            </svg>
                          </div>
                        ) : (
                          <div>{percentChange}%</div>
                        )}
                      </td>
                    </tr>
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
              let percentChange = parseFloat((
                priceChange.percentChange
              ).toFixed(2))
              return (
                <div
                  key={priceChange.productId}
                  className="mb-4 rounded-lg bg-white p-4 shadow-lg"
                >
                  <div className="font-semibold flex justify-between items-center">
                    {priceChange.genericName}
                    <span className="font-light text-xs">
                      {priceChange.productName}
                    </span>
                  </div>
                  <div className="text-gray-500 flex justify-between items-center mt-2">
                    <div>Oldest Price:</div>
                    <div>
                      <div className='text-gray-700'>CAD {priceChange.oldestPrice}</div>
                      <div className='text-xs text-gray-500'>
                        {new Date(
                          priceChange.oldestDate
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 flex justify-between items-center  mt-2">
                    <div>Newest Price:</div>
                    <div>
                      <div className='text-gray-700'>CAD {priceChange.newestPrice}</div>
                      <div className='text-xs text-gray-500'>
                        {new Date(
                          priceChange.newestDate
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-500 flex justify-between items-center mt-2">
                    Change:
                    {percentChange > 0 ? (
                      <div className="flex items-center text-red-500 ">
                        <svg className="text-red-500 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                        </svg>
                        {percentChange}%

                      </div>
                    ) : percentChange < 0 ? (
                      <div className="flex items-center text-green-600">
                        <svg className="text-green-600 w-5 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>
                        {percentChange}%
                      </div>
                    ) : (
                      <div>{percentChange}%</div>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default TopMovers