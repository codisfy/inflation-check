import { render } from '@redwoodjs/testing/web'

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
      render(<Article article={ARTICLE}/>)
    }).not.toThrow()
  })
})
