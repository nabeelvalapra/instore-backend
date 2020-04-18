import types from './types';


function requestStore(state = false, action) {
  switch (action.type) {
    case types.REQUEST_STORE:
      return true
    default:
      return state
}