import { combineReducers } from 'redux'
import { storeDetails, products } from './app/home/duck/reducers'

export default combineReducers({storeDetails, products})