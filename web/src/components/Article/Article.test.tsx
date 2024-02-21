import { render, screen, waitFor } from '@redwoodjs/testing'

import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
const ARTICLE = {
  id: 42,
  title: 'Prisma is the best',
  body: 'I love Prisma so much. It is the best thing since sliced bread.',
  createdAt: '2022-02-01T12:34:56Z',
}
describe('Article', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Article article={ARTICLE} />)
    }).not.toThrow()
  })
})
it('renders comments when displaying a full blog post', async () => {
  const comment = standard().comments[0]
  render(<Article article={ARTICLE} />)


  await waitFor(() => {
    expect(screen.getByText(comment.body)).toBeInTheDocument()
  })
})

it('does not render comments when displaying a summary', async () => {
  const comment = standard().comments[0]
  render(<Article article={ARTICLE} summary={true} />)

  await waitFor(() =>
    expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
  )
})
