import type { QuantityConversion } from '@prisma/client'

import { quantityConversions } from './quantityConversions'
import type { StandardScenario } from './quantityConversions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('quantityConversions', () => {
  scenario(
    'returns all quantityConversions',
    async (scenario: StandardScenario) => {
      const result = await quantityConversions()

      expect(result.length).toEqual(
        Object.keys(scenario.quantityConversion).length
      )
    }
  )
})
