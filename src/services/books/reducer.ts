import { createSlice } from '@reduxjs/toolkit'
import { BookPropsInit } from '../../utils/interfaces/interfaces'

interface InitialState {
  books: BookPropsInit[]
  loading: boolean
  error: string
}

const initialState: InitialState = {
  books: [],
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
    }
  }
})

export const { fetchBooksStart, fetchBooksSuccess, fetchBooksFailure } =
  bookSlice.actions
export default bookSlice.reducer
