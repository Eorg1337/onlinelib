import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  book: string
  author: string
  year: string
}

const initialState: InitialState = {
  book: '',
  author: '',
  year: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBookFilter(state, action) {
      const filter = action.payload
      state.book = filter
    },
    setAuthorFilter(state, action) {
      const filter = action.payload
      state.author = filter
    },
    setYearFilter(state, action) {
      const filter = action.payload
      state.year = filter
    }
  }
})

export const { setBookFilter, setAuthorFilter, setYearFilter } =
  filterSlice.actions
export default filterSlice.reducer
