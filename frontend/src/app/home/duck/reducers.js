import types from './types';


const initialState = {
    isFetching: false,
}
export const store = (state=initialState, action) => {

  switch (action.type) {

    case types.REQUEST_STORE_DETAILS:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.RECEIVE_STORE_DETAILS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          store: {
            "storeName": json.name,
            "storeLogo": json.logo
          }
      })

    default:
      return state
  }
}
