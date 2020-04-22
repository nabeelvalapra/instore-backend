import fetch from 'cross-fetch'
import types from './types';

import { APIURL } from '../../common'


export function requestHomeProducts() {
  return {
    type: types.REQUEST_HOME_PRODUCTS
  }
}

export function receiveHomeProducts(json) {
  return {
    type: types.RECEIVE_HOME_PRODUCTS,
    json
  }
}

export function requestSingleProduct(productId){
  return {
    type: types.REQUEST_SINGLE_PRODUCT,
  }
}

export function receiveSingleProduct(json){
  return {
    type: types.RECEIVE_SINGLE_PRODUCT,
    json
  }
}

export function fetchProducts(productId=null) {
  return function(dispatch) {
    dispatch(
      (productId
        ? requestSingleProduct(productId)
        : requestHomeProducts()
      )
    )
    let endpoint = (productId
      ? `${APIURL}/store/products/${productId}/`
      : `${APIURL}/store/products/`
    )
    return fetch(endpoint)
      .then(
        response => response.json(),
        error => { throw error }
      )
      .then(
        json => (productId
          ? dispatch(receiveSingleProduct(json))
          : dispatch(receiveHomeProducts(json))
        )
      )
  }
}