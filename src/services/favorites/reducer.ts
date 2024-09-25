import { createSlice } from '@reduxjs/toolkit'
import { BookProps } from '../../utils/interfaces/interfaces'

interface InitialState {
  favorites: BookProps[]
}

const initialState: InitialState = {
  favorites: []
}

const favSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action) {
      const book = action.payload
      if (!state.favorites.find((fav) => fav.uniq_key === book.uniq_key)) {
        state.favorites.push(book)
      }
    },
    removeFavorite(state, action) {
      const book = action.payload
      state.favorites = state.favorites.filter(
        (fav) => fav.uniq_key !== book.uniq_key
      )
    }
  }
})

export const { addFavorite, removeFavorite } = favSlice.actions
export default favSlice.reducer
