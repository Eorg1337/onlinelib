import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pickedBooks: []
}

const busketSlice = createSlice({
  name: 'busket',
  initialState,
  reducers: {
    addBook(state, action) {
      const book = action.payload
      let pickedBooks = []
      if (!state.pickedBooks.find((b) => b.cover === book.cover)) {
        let count = 1
        pickedBooks = [...state.pickedBooks]
        pickedBooks.push({ ...book, count })
      } else {
        pickedBooks.count++
      }
      return { pickedBooks }
    },
    removeBook(state, action) {
      const cover = action.payload
      if (state.pickedBooks.count > 1) {
        state.pickedBooks.count--
      } else {
        state.pickedBooks = state.pickedBooks.filter((b) => b.cover !== cover)
      }
    }
  }
})

export const { addBook, removeBook } = busketSlice.actions
export default busketSlice.reducer
