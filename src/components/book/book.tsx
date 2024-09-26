import React from 'react'
import { useSelector, useDispatch } from '../../services/store'
import { addFavorite, removeFavorite } from '../../services/favorites/reducer'
import { addBook, removeBook } from '../../services/busket/reducer'
import {
  selectPickedBooks,
  selectFavorites
} from '../../utils/constants/constants'
import { CombinedProps, BookProps } from '../../utils/interfaces/interfaces'
import { fetchAddBookActive } from '../../services/books/reducer'

const Book: React.FC<CombinedProps> = ({ render, ...props }) => {
  // TODO
  // Все селекторы поместить в константы - complete

  const isFavorite = useSelector(selectFavorites).some((item: BookProps) => {
    return item.uniq_key === props.uniq_key
  })

  const isBusket = useSelector(selectPickedBooks).some(
    (item: BookProps) => item.uniq_key === props.uniq_key
  )
  const dispatch = useDispatch()
  const handleFavoriteClick = (isFav: boolean) => {
    isFav ? dispatch(removeFavorite(props)) : dispatch(addFavorite(props))
  }

  const handleBusketClick = (isBusket: boolean) => {
    isBusket
      ? dispatch(removeBook(props.uniq_key))
      : dispatch(addBook({ ...props }))
  }

  const handleActiveBook = () => {
    dispatch(fetchAddBookActive(props.uniq_key))
  }
  return (
    <>
      {render(
        props,
        handleFavoriteClick,
        handleBusketClick,
        handleActiveBook,
        isBusket,
        isFavorite
      )}
    </>
  )
}

export default Book
