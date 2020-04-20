import { combineReducers } from 'redux'
import { store } from './app/home/duck/reducers'
import { product } from './app/product/duck/reducers'

export default combineReducers({store, product})