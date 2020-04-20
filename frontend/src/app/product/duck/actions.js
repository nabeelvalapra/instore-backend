import fetch from 'cross-fetch'
import types from './types';

import { APIURL } from '../../common'


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

export function fetchProducts(productId=null) {
    return function(dispatch) {
        dispatch(requestProducts())
        let endpoint = (productId
            ? `${APIURL}/store/products/${productId}/`
            : `${APIURL}/store/products/`
        )
        return fetch(endpoint)
            .then(
                response => response.json(),
                error => console.log("Fetch Product Error" + error)
            )
            .then(
                json => (productId
                    ? dispatch(receiveProducts([json]))
                    : dispatch(receiveProducts(json))
                )
            )
    }
}