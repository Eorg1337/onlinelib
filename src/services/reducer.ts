import { combineReducers } from 'redux'
import favSlice from './favorites/reducer'
import filterSlice from './filter/reducer'
import bookSlice from './books/reducer'
import busketSlice from './busket/reducer'
const rootReducer = combineReducers({
  bookSlice: bookSlice,
  favSlice: favSlice,
  filterSlice: filterSlice,
  busketSlice: busketSlice
})

export default rootReducer
