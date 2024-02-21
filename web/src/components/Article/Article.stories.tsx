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

import Article from './Article'

const meta: Meta<typeof Article> = {
  component: Article,
  tags: ['autodocs'],
}

export default meta
const ARTICLE = {
  id: 1,
  title: 'Title',
  body: 'This is the body of the article. It is very long and has a lot of words. It is a very good article. It is the best article',
  createdAt: '2021-07-13T00:00:00Z',
}

type Story = StoryObj<typeof Article>


export const full = {
  render: () => {
    return <Article article={ARTICLE} />
  },
}

export const summary = {
  render: () => {
    return <Article article={ARTICLE} summary={true} />
  },
}
