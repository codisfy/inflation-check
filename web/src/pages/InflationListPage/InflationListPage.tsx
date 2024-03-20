import { useLocation } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PriceChangeCell from 'src/components/PriceChangeCell'
import { useDatesStore } from 'src/stores'
const LIMIT = 10

const InflationListPage = () => {
  const { dates } = useDatesStore()
  // get direction from param
  const { search } = useLocation()
  let direction = new URLSearchParams(search).get('direction')
  if (direction === 'asc') {
    direction = 'asc'
  } else {
    direction = 'desc'
  }
  return (
    <>
      <Metadata title="Inflation List" description="InflationList page" />
      <div>
        <PriceChangeCell
          startDate={dates.startDate}
          endDate={dates.endDate}
          direction={direction}
          limit={LIMIT}
          seeMoreLink={false}
        />
      </div>
    </>
  )
}

export default InflationListPage
