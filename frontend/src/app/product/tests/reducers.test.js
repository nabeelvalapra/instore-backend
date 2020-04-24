import { product } from '../duck/reducers'


describe('product reducer', () => {
  it('should return the initial state', () => {
    expect(product(undefined, {})).toEqual(
      {
        isFetching: false
      }
    )
  })
})