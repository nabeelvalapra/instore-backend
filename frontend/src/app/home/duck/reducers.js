import types from './types';


const defaultState = {
    hasFetched: false,
    isFetching: false,
}
export const store = (state=defaultState, action) => {

  switch (action.type) {

    case types.REQUEST_STORE_DETAILS:
      return Object.assign({}, state, {
          hasFetched: false,
          isFetching: true,
      })

    case types.RECEIVE_STORE_DETAILS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          hasFetched: true,
          store: {
            "storeName": json.name,
            "storeLogo": json.logo
          }
      })

    default:
      return state
  }
}
