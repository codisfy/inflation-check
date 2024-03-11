import type { Store } from '@prisma/client'

import { stores } from './stores'
import type { StandardScenario } from './stores.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stores', () => {
  scenario('returns all stores', async (scenario: StandardScenario) => {
    const result = await stores()

    expect(result.length).toEqual(Object.keys(scenario.store).length)
  })
})
