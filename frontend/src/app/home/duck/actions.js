import fetch from 'cross-fetch'
import types from './types';

import { APIURL } from '../../common'


export function fetchStoreDetailRequest() {
  return {
    type: types.FETCH_STORE_DETAIL_REQUEST
  }
}

export function fetchStoreDetailSuccess(json) {
  return {
    type: types.FETCH_STORE_DETAIL_SUCCESS,
    json
  }
}

export function fetchStoreDetailFailed(errorMsg) {
  return {
    type: types.FETCH_STORE_DETAIL_FAILED,
    errorMsg
  }
}

export function fetchStoreDetails() {
    return function(dispatch) {
        dispatch(fetchStoreDetailRequest())
        return fetch(`${APIURL}/`)
            .then(
                response => response.json(),
            )
            .then(
                json => dispatch(fetchStoreDetailSuccess(json[0]))
            )
            .catch(
                error => dispatch(fetchStoreDetailFailed(error.message))
            )
    }
}