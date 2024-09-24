import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../services/favorites/reducer'
import { addBook, removeBook } from '../../services/busket/reducer'
import {
  selectPickedBooks,
  selectFavorites
} from '../../utils/constants/constants'
const Book = ({ render, ...props }) => {
  // TODO
  // Все селекторы поместить в константы
  const isFavorite = useSelector(selectFavorites).some((item) => {
    return item.uniq_key === props.uniq_key
  })

  const isBusket = useSelector(selectPickedBooks).some(
    (item) => item.uniq_key === props.uniq_key
  )
  const dispatch = useDispatch()
  const handleFavoriteClick = (isFav) => {
    isFav ? dispatch(removeFavorite(props)) : dispatch(addFavorite(props))
  }

  const handleBusketClick = (isBusket) => {
    isBusket
      ? dispatch(removeBook(props.uniq_key))
      : dispatch(addBook({ ...props }))
  }
  return (
    <>
      {render(
        props,
        handleFavoriteClick,
        handleBusketClick,
        isBusket,
        isFavorite
      )}
    </>
  )
}

export default Book
