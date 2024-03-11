import type { Prisma, Location } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.LocationCreateArgs>({
  location: {
    one: { data: { city: 'String', province: 'String', address: 'String' } },
    two: { data: { city: 'String', province: 'String', address: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Location, 'location'>
