export const selectFavorites = (state) => state.favSlice.favorites
export const selectPickedBooks = (state) => state.busketSlice.pickedBooks
export const selectBookFilter = (state) => state.filterSlice.book
export const selectAuthorFilter = (state) => state.filterSlice.author
export const selectYearFilter = (state) => state.filterSlice.year
export const MAIN_PATH = '/'
export const BUSKET_PATH = 'busket'
export const FAV_PATH = 'favs'
export const NOT_FOUND_PATH = '*'
