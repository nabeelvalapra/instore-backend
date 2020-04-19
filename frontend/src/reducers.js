import { combineReducers } from 'redux'
import { requestStoreDetail, requestProducts } from './app/home/duck/reducers'

export default combineReducers({requestStoreDetail, requestProducts})