import fetch from 'cross-fetch'
import types from './types';

import { BACKEND_API_ENDPOINT } from '../../common'


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

export function setTagFilter(tag) {
  return {
    type: types.SET_TAG_FILTER,
    tag
  }
}

export function fetchStoreDetails() {
    return function(dispatch) {
        dispatch(fetchStoreDetailRequest())
        return fetch(`${BACKEND_API_ENDPOINT}/`)
            .then(response => {
              if(response.status >= 400) {
                throw new Error("Error fetching store details. Please try again later.")
              }
              return response.json()
            })
            .then(json => dispatch(fetchStoreDetailSuccess(json[0])))
            .catch(error => dispatch(fetchStoreDetailFailed(error.message)))
    }
}