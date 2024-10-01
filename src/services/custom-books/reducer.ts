import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  addCustomBook: boolean
  findCustomBook: boolean
}

const initialState: InitialState = {
  addCustomBook: false,
  findCustomBook: false
}

const customBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddCustomBook(state, action) {
      state.addCustomBook = action.payload
    },
    setFindCustomBook(state, action) {
      state.findCustomBook = action.payload
    }
  }
})

export const { setAddCustomBook, setFindCustomBook } = customBookSlice.actions
export default customBookSlice.reducer
