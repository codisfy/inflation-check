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

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Comment>

export const Primary: Story = {
  render: (args) => {
    return <Comment {...args} />
  },
  args: {
    comment: {
      name: 'Jane',
      createdAt: '2021-07-01T12:00:00Z',
      body: 'This is a comment.',
    },
  },
}
