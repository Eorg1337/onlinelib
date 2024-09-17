import { combineReducers } from 'redux'
import favSlice from '../services/favorites/reducer'
import filterSlice from '../services/filter/reducer'
import bookSlice from '../services/books/reducer'
import busketSlice from '../services/busket/reducer'
const rootReducer = combineReducers({
  bookSlice: bookSlice,
  favSlice: favSlice,
  filterSlice: filterSlice,
  busketSlice: busketSlice
})

export default rootReducer
