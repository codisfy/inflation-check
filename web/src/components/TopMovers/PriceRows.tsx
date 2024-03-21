import { PriceChange } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'

export const PriceRowDesktop = ({
  priceChange,
  percentChange,
}: {
  priceChange: PriceChange
  percentChange: number
}) => (
  <tr
    className="cursor-pointer drop-shadow-sm"
    onClick={() =>
      navigate(
        routes.product({
          id: priceChange.productId,
          productName: priceChange.genericName,
        })
      )
    }
    onKeyDown={(event) => {
      if (event.key === 'Enter') {
        navigate(
          routes.product({
            id: priceChange.productId,
            productName: priceChange.genericName,
          })
        )
      }
    }}
    tabIndex={0}
  >
    <td className="rounded-l-lg border-y border-l py-5 pl-3 text-sm font-normal">
      <div className="flex flex-col whitespace-nowrap">
        <span className="text-xs font-semibold md:text-sm">
          {priceChange.genericName}
        </span>
        <span
          className="mt-1 text-xs text-gray-500"
          title="Name parsed from receipt"
        >
          {priceChange.productName}
        </span>
      </div>
    </td>
    <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal  md:text-sm">
      <div className="flex flex-col whitespace-nowrap">
        <span className="text-xs font-semibold md:text-sm ">
          CAD {priceChange.oldestPrice.toFixed(2)}
        </span>
        <span className="mt-1 text-xs text-gray-500">
          {new Date(priceChange.oldestDate).toLocaleDateString()}
        </span>
      </div>
    </td>
    <td className="border-x-0 border-y border-[#7851BD]/20 px-2 py-5 text-xs  font-normal md:text-sm">
      <div className="flex flex-col whitespace-nowrap">
        <span className="text-xs font-semibold md:text-sm ">
          CAD {priceChange.newestPrice.toFixed(2)}
        </span>
        <span className="mt-1 text-xs text-gray-500">
          {new Date(priceChange.newestDate).toLocaleDateString()}
        </span>
      </div>
    </td>
    <td className="rounded-r-lg border-y border-r border-[#7851BD]/20 px-2 py-5 text-xs font-semibold md:text-sm">
      {percentChange > 0 ? (
        <div className="flex items-center text-red-500 ">
          {percentChange.toFixed(2)}%
          <svg
            className="h-4 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      ) : percentChange < 0 ? (
        <div className="flex items-center text-green-600">
          {percentChange.toFixed(2)}%
          <svg
            className="h-4 w-5 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>
        </div>
      ) : (
        <div>{percentChange.toFixed(2)}%</div>
      )}
    </td>
  </tr>
)
export const PriceRowMobile = ({
  priceChange,
  percentChange,
}: {
  priceChange: PriceChange
  percentChange: number
}) => (
  <div
    className="mb-4 rounded-lg bg-white p-4 shadow-lg"
    role="button"
    tabIndex={0}
    onClick={() =>
      navigate(
        routes.product({
          id: priceChange.productId,
          productName: priceChange.genericName,
        })
      )
    }
  >
    <div className="flex items-center justify-between font-semibold">
      {priceChange.genericName}
      <span className="text-xs font-light">{priceChange.productName}</span>
    </div>
    <div className="mt-2 flex items-center justify-between text-gray-500">
      <div className="text-sm">Oldest Price:</div>
      <div>
        <div className="text-gray-700">
          CAD {priceChange.oldestPrice.toFixed(2)}
        </div>
        <div className="text-xs text-gray-500">
          {new Date(priceChange.oldestDate).toLocaleDateString()}
        </div>
      </div>
    </div>
    <div className="mt-2 flex items-center justify-between  text-gray-500">
      <div className="text-sm">Newest Price:</div>
      <div>
        <div className="text-gray-700">
          CAD {priceChange.newestPrice.toFixed(2)}
        </div>
        <div className="text-xs text-gray-500">
          {new Date(priceChange.newestDate).toLocaleDateString()}
        </div>
      </div>
    </div>
    <div className="mt-2 flex items-center justify-between text-gray-500">
      <div className="text-sm">Change:</div>
      {percentChange > 0 ? (
        <div className="flex items-center text-red-500 ">
          <svg
            className="h-4 w-5 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
          {percentChange.toFixed(2)}%
        </div>
      ) : percentChange < 0 ? (
        <div className="flex items-center text-green-600">
          <svg
            className="h-4 w-5 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>
          {percentChange.toFixed(2)}%
        </div>
      ) : (
        <div>{percentChange.toFixed(2)}%</div>
      )}
    </div>
  </div>
)
