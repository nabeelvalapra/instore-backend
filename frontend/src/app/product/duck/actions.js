import fetch from 'cross-fetch'
import types from './types';

import { APIURL } from '../../common'


export function fetchProductsRequest() {
  return {
    type: types.FETCH_PRODUCTS_REQUEST
  }
}

export function fetchProductsSuccess(json) {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    json
  }
}

export function fetchProductsFailed(errorMsg){
  return {
    type: types.FETCH_PRODUCTS_FAILED,
    errorMsg
  }
}

export function fetchProducts(productId=null) {
  return function(dispatch) {
    dispatch(fetchProductsRequest())
    let endpoint = (productId
      ? `${APIURL}/store/products/${productId}/`
      : `${APIURL}/store/products/`
    )
    return fetch(endpoint)
      .then(
        response => response.json(),
      )
      .then(
        json => dispatch(fetchProductsSuccess((productId ? [json] : json)))
      )
      .catch(
        error => dispatch(fetchProductsFailed(error.message))
      )
  }
}