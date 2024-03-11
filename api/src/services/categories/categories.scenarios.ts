import type { Prisma, Category } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: {
    one: { data: { name: 'String8775841' } },
    two: { data: { name: 'String9885434' } },
  },
})

export type StandardScenario = ScenarioData<Category, 'category'>
