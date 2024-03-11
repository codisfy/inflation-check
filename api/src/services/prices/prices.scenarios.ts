import type { Prisma, Price } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PriceCreateArgs>({
  price: {
    one: {
      data: {
        price: 9920942.097531835,
        currency: 'String',
        date: '2024-03-11T23:26:11.288Z',
        product: {
          create: {
            name: 'String',
            category: { create: { name: 'String4467944' } },
            baseUnit: { create: { unitName: 'String902278' } },
          },
        },
        quantityUnit: { create: { unitName: 'String3319946' } },
      },
    },
    two: {
      data: {
        price: 8226352.665408487,
        currency: 'String',
        date: '2024-03-11T23:26:11.288Z',
        product: {
          create: {
            name: 'String',
            category: { create: { name: 'String1448269' } },
            baseUnit: { create: { unitName: 'String2675383' } },
          },
        },
        quantityUnit: { create: { unitName: 'String9958789' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Price, 'price'>
