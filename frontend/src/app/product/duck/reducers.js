import types from './types';


const defaultState = {
  isFetching: false,
  hasFetched: false,
}
export const product = (state=defaultState, action) => {
    switch (action.type) {

      case types.REQUEST_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: true,
          hasFetched: false,
        })

      case types.RECEIVE_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: false,
          hasFetched: true,
          products: action.json
        })

      case types.RECEIVE_PARTIAL_PRODUCT:
        return Object.assign({}, state, {
          isFetching: false,
          hasFetched: true,
          products: [action.json]
        })

      default:
        return state
    }
}
