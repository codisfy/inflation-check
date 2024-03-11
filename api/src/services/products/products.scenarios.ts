import type { Prisma, Product } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ProductCreateArgs>({
  product: {
    one: {
      data: {
        name: 'String',
        category: { create: { name: 'String1939412' } },
        baseUnit: { create: { unitName: 'String1124799' } },
      },
    },
    two: {
      data: {
        name: 'String',
        category: { create: { name: 'String507418' } },
        baseUnit: { create: { unitName: 'String6370708' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Product, 'product'>
