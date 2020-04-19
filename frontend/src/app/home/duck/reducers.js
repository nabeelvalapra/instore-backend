import types from './types';


export const storeDetails = (state, action) => {
  switch (action.type) {
    case types.REQUEST_STORE_DETAILS:
      return Object.assign({}, state, {
          isFetching: true,
      })
    case types.RECEIVE_STORE_DETAILS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          storeDetails: {
            "storeName": json.name,
            "storeLogo": json.logo
          }
      })
    default:
      return Object.assign({}, state, {
          isFetching: false,
      })
  }
}

export const products = (state, action) => {
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