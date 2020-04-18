import types from './types';


export function requestStoreDetails() {
    return {
      type: types.REQUEST_STORE_DETAILS
    }
}

export function responseStoreDetails(json) {
    return {
        type: types.RESPOSE_STORE_DETAILS,
        json
    }
}
