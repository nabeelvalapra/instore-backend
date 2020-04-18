import types from './types';


export const storeDetail = (state, action) => {
  switch (action.type) {
    case types.REQUEST_STORE_DETAILS:
      return Object.assign({}, state, {
          isFetching: true
      })
    default:
      return Object.assign({}, state, {
          isFetching: false
      })
  }
}