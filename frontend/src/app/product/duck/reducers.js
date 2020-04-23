import types from './types';


const initialState = {
  isFetching: false,
}

export const product = (state = initialState, action) => {
    switch (action.type) {

      case types.FETCH_PRODUCTS_REQUEST:
        return Object.assign({}, state, {
          isFetching: true,
        })

      case types.FETCH_PRODUCTS_SUCCESS:
        const newProducts = action.json.reduce(function(result, item) {
          result[item.id] = item;
          return result;
        }, {})
        const newItems = (
          state.items
          ? Object.assign({}, state.items, newProducts)
          : newProducts
        )
        return Object.assign({}, state, {
          isFetching: false,
          items: newItems
        })

      case types.FETCH_PRODUCTS_FAILED:
        return Object.assign({}, state, {
          isFetching: false,
          error: action.errorMsg
        })

      default:
        return state
    }
}
