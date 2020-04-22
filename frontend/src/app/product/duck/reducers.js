import types from './types';


const initialState = {
  isFetching: false,
}
export const product = (state=initialState, action) => {
    switch (action.type) {

      case types.REQUEST_HOME_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case types.RECEIVE_HOME_PRODUCTS:
        return Object.assign({}, state, {
          isFetching: false,
          items: action.json
        })

      case types.REQUEST_SINGLE_PRODUCT:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case types.RECEIVE_SINGLE_PRODUCT:
        return Object.assign({}, state, {
          isFetching: false,
          items: [action.json]
        })

      default:
        return state
    }
}
