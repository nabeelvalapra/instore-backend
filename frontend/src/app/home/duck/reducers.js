import types from './types';


const storeInitialState = {
  isFetching: false,
}

export const store = (state=storeInitialState, action) => {

  switch (action.type) {

    case types.FETCH_STORE_DETAIL_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.FETCH_STORE_DETAIL_SUCCESS:
      let json = action.json
      return Object.assign({}, state, {
          isFetching: false,
          details: {
            "name": json.name,
            "logo": json.logo,
            "backgroundColor": json.background_color,
            "buttonColor": json.button_color
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


const spotlightInitialState = {
  isFetching: false,
}
export const spotlight = (state=spotlightInitialState, action) => {

  switch (action.type) {

    case types.FETCH_STORE_SPOTLIGHT_REQUEST:
      return Object.assign({}, state, {
          isFetching: true,
      })

    case types.FETCH_STORE_SPOTLIGHT_SUCCESS:
      return Object.assign({}, state, {
          isFetching: false,
          images: action.json
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

export const tagFilter = (state = "popular", action) => {
  if(action.tag){
    return action.tag
  }
  return state
}
