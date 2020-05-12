import fetch from 'cross-fetch'
import * as action from './actions'
import { BACKEND_API_ENDPOINT } from '../../common'


export function fetchStoreDetails() {
    return function(dispatch) {
      dispatch(action.fetchStoreDetailRequest())
      return fetch(`${BACKEND_API_ENDPOINT}/`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error("Error fetching store details. Please try again later.")
            }
            return response.json()
          })
          .then(json => dispatch(action.fetchStoreDetailSuccess(json[0])))
          .catch(error => dispatch(action.fetchStoreDetailFailed(error.message)))
    }
}

export function fetchStoreSpotlight() {
    return function(dispatch) {
      dispatch(action.fetchStoreSpotlightRequest())
      return fetch(`${BACKEND_API_ENDPOINT}/spotlights/`)
          .then(response => {
            if(response.status >= 400) {
              throw new Error("Error fetching store details. Please try again later.")
            }
            return response.json()
          })
          .then(json => dispatch(action.fetchStoreSpotlightSuccess(json)))
          .catch(error => dispatch(action.fetchStoreSpotlightFailed(error.message)))
    }
}