import type { QuantityUnit } from '@prisma/client'

import { quantityUnits } from './quantityUnits'
import type { StandardScenario } from './quantityUnits.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('quantityUnits', () => {
  scenario('returns all quantityUnits', async (scenario: StandardScenario) => {
    const result = await quantityUnits()

    expect(result.length).toEqual(Object.keys(scenario.quantityUnit).length)
  })
})
