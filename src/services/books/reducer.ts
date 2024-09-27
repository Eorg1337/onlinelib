import { createSlice } from '@reduxjs/toolkit'
import { BookProps, BookPropsInit } from '../../utils/interfaces/interfaces'

interface InitialState {
  books: BookPropsInit[]
  activeBook: string
  currentLocation: string
  loading: boolean
  error: string
}

const initialState: InitialState = {
  books: [],
  activeBook: '',
  currentLocation: '',
  loading: false,
  error: ''
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    fetchBooksStart(state) {
      state.loading = true
      state.error = ''
    },
    fetchBooksSuccess(state, action) {
      state.books = action.payload
      state.loading = false
    },
    fetchBooksFailure(state, action) {
      state.error = action.payload
      state.loading = false
    },
    fetchAddBookActive(state, action) {
      state.activeBook = action.payload
    },
    fetchDelBookActive(state) {
      state.activeBook = ''
    },
    setCurrentLocation(state, action) {
      state.currentLocation = action.payload
    }
  }
})

export const {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure,
  fetchAddBookActive,
  fetchDelBookActive,
  setCurrentLocation
} = bookSlice.actions
export default bookSlice.reducer
