import types from './types';


export function requestStoreDetails() {
    console.log("requested Store Details...");
    return {
      type: types.REQUEST_STORE
    }
}

export function responseStoreDetails(json) {
    return {
        type: types.RESPOSE_STORE,
        json
    }
}
