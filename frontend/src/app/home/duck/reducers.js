import types from './types';


const initialState = {
  isFetching: false,
}

export const store = (state=initialState, action) => {

  switch (action.type) {

    case types.FETCH_STORE_DETAIL_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.FETCH_STORE_DETAIL_SUCCESS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          store: {
            "name": json.name,
            "logo": json.logo
          }
      })
    
      case types.FETCH_STORE_DETAIL_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.errorMsg
        })

    default:
      return state
  }
}
