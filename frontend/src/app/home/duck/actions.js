import types from './types';

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

export function fetchStoreSpotlightRequest() {
  return {
    type: types.FETCH_STORE_SPOTLIGHT_REQUEST
  }
}

export function fetchStoreSpotlightSuccess(json) {
  return {
    type: types.FETCH_STORE_SPOTLIGHT_SUCCESS,
    json
  }
}

export function fetchStoreSpotlightFailed(errorMsg) {
  return {
    type: types.FETCH_STORE_SPOTLIGHT_FAILED,
    errorMsg
  }
}

export function setTagFilter(tag) {
  return {
    type: types.SET_TAG_FILTER,
    tag
  }
}
