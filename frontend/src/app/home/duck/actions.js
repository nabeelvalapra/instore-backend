import fetch from 'cross-fetch'
import types from './types';


export function requestStoreDetails() {
    return {
      type: types.REQUEST_STORE_DETAILS
    }
}

export function responseStoreDetails(json) {
    return {
        type: types.RECEIVE_STORE_DETAILS,
        json
    }
}

export function fetchStoreDetails() {
    return function(dispatch) {
        console.log("Started")
        dispatch(requestStoreDetails())
        return fetch('http://localhost:8000/store/')
            .then(
                response => response.json(),
                error => console.log("Error" + error)
            )
            .then(
                json => dispatch(responseStoreDetails(json))
            )
    }
}