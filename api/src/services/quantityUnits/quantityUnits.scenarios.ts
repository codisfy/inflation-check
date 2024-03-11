import type { Prisma, QuantityUnit } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.QuantityUnitCreateArgs>({
  quantityUnit: {
    one: { data: { unitName: 'String2735665' } },
    two: { data: { unitName: 'String953525' } },
  },
})

export type StandardScenario = ScenarioData<QuantityUnit, 'quantityUnit'>
