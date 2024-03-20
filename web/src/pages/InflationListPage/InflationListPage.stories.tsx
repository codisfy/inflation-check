import type { Meta, StoryObj } from '@storybook/react'

import InflationListPage from './InflationListPage'

const meta: Meta<typeof InflationListPage> = {
  component: InflationListPage,
}

export default meta

type Story = StoryObj<typeof InflationListPage>

export const Primary: Story = {}
