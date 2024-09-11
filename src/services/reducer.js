import { combineReducers } from 'redux'
import favSlice from '../services/favorites/reducer'
import filterSlice from '../services/filter/reducer'
import bookSlice from '../services/books/reducer'
const rootReducer = combineReducers({
  bookSlice: bookSlice,
  favSlice: favSlice,
  filterSlice: filterSlice
})

export default rootReducer
