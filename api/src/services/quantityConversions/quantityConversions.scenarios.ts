import type { Prisma, QuantityConversion } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.QuantityConversionCreateArgs>({
  quantityConversion: {
    one: {
      data: {
        conversionFactor: 2648622.173371673,
        fromUnit: { create: { unitName: 'String9192718' } },
        toUnit: { create: { unitName: 'String9307300' } },
      },
    },
    two: {
      data: {
        conversionFactor: 5887963.863472647,
        fromUnit: { create: { unitName: 'String1723575' } },
        toUnit: { create: { unitName: 'String8786184' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  QuantityConversion,
  'quantityConversion'
>
