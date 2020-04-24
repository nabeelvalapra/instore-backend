import { store } from '../duck/reducers'


describe('store reducer', () => {
  it('should return the initial state', () => {
    expect(store(undefined, {})).toEqual(
      {
        isFetching: false
      }
    )
  })
})