import types from './types';


export const requestStoreDetail = (state, action) => {
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
