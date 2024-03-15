// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import TopMovers from './TopMovers'
import { standard, increases } from './TopMovers.mock'

const meta: Meta<typeof TopMovers> = {
  component: TopMovers,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TopMovers>

export const NoData: Story = {}

export const LeastInflated: Story = {
  args: {
    priceChanges: standard().priceChanges,
    title: standard().title,
  },
}

export const MostInflated: Story = {
  args: {
    priceChanges: increases().priceChanges,
    title: 'Most Inflated',
  },
}
