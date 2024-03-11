import type { Price } from '@prisma/client'

import { prices } from './prices'
import type { StandardScenario } from './prices.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('prices', () => {
  scenario('returns all prices', async (scenario: StandardScenario) => {
    const result = await prices()

    expect(result.length).toEqual(Object.keys(scenario.price).length)
  })
})
