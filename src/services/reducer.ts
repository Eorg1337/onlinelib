import { combineReducers } from 'redux'
import favSlice from './favorites/reducer'
import filterSlice from './filter/reducer'
import bookSlice from './books/reducer'
import busketSlice from './busket/reducer'
import customBookSlice from './custom-books/reducer'
const rootReducer = combineReducers({
  bookSlice: bookSlice,
  favSlice: favSlice,
  filterSlice: filterSlice,
  busketSlice: busketSlice,
  customBookSlice: customBookSlice
})

export default rootReducer
