import fetch from 'cross-fetch'
import types from './types';

import { APIURL } from '../../common'


export function requestStoreDetails() {
    return {
      type: types.REQUEST_STORE_DETAILS
    }
}

export function receiveStoreDetails(json) {
    return {
        type: types.RECEIVE_STORE_DETAILS,
        json
    }
}

export function requestProducts() {
    return {
        type: types.REQUEST_PRODUCTS
    }
}

export function receiveProducts(json) {
    return {
        type: types.RECEIVE_PRODUCTS,
        json
    }
}

export function fetchStoreDetails() {
    return function(dispatch) {
        dispatch(requestStoreDetails())
        return fetch(`${APIURL}/store/`)
            .then(
                response => response.json(),
                error => console.log("Fetch Store Detail Error" + error)
            )
            .then(
                json => dispatch(receiveStoreDetails(json[0]))
            )
    }
}

export function fetchProducts() {
    return function(dispatch) {
        dispatch(requestProducts())
        return fetch(`${APIURL}/store/products/`)
            .then(
                response => response.json(),
                error => console.log("Fetch Product Error" + error)
            )
            .then(
                json => dispatch(receiveProducts(json))
            )
    }
}