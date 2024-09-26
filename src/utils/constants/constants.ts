export const selectFavorites = (state: any) => state.favSlice?.favorites
export const selectPickedBooks = (state: any) => state.busketSlice?.pickedBooks
export const selectBookFilter = (state: any) => state.filterSlice?.book
export const selectAuthorFilter = (state: any) => state.filterSlice?.author
export const selectYearFilter = (state: any) => state.filterSlice?.year
export const MAIN_PATH = '/'
export const BUSKET_PATH = 'busket'
export const FAV_PATH = 'favs'
export const NOT_FOUND_PATH = '*'
export const BOOK_DETAILS = 'book'
