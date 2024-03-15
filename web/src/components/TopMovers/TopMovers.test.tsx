import { render } from '@redwoodjs/testing/web'

import TopMovers from './TopMovers'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TopMovers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TopMovers />)
    }).not.toThrow()
  })
})
