import { createSlice } from '@reduxjs/toolkit'
import { BookProps } from '../../utils/interfaces/interfaces'

interface initialState {
  pickedBooks: BookProps[]
}

const initialState: initialState = {
  pickedBooks: []
}

const busketSlice = createSlice(
  {
    name: 'busket',
    initialState,
    reducers: {
      addBook(state, action) {
        const book = action.payload
        let pickedBooks: BookProps[] = []
        if (!state.pickedBooks.find((b) => b.uniq_key === book.uniq_key)) {
          let count = 1
          pickedBooks = [...state.pickedBooks]
          pickedBooks.push({ ...book, count })
        } else {
          //pickedBooks.count++
        }
        return { pickedBooks }
      },
      removeBook(state, action) {
        const uniq_key = action.payload
        // if (state.pickedBooks.count > 1) {
        //   state.pickedBooks.count--
        // } else {
        state.pickedBooks = state.pickedBooks.filter((b) => {
          return b.uniq_key !== uniq_key
        })
      }
    }
  }
  /*}*/
)

export const { addBook, removeBook } = busketSlice.actions
export default busketSlice.reducer
