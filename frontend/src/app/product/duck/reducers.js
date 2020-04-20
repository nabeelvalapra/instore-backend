import types from './types';


export const product = (state, action) => {
    switch (action.type) {

      case types.REQUEST_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case types.RECEIVE_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: false,
          products: action.json
        })

      default:
        return Object.assign({}, state, {
          isFetching: false
        })
    }
}
