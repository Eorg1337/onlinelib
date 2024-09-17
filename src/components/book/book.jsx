import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../services/favorites/reducer'
import { addBook, removeBook } from '../../services/busket/reducer'
const Book = ({ render, ...props }) => {
  const isFavorite = useSelector((state) => state.favSlice.favorites).some(
    (item) => item.cover === props.cover
  )

  const isBusket = useSelector((state) => state.busketSlice.pickedBooks).some(
    (item) => item.cover === props.cover
  )
  const dispatch = useDispatch()
  const handleFavoriteClick = (isFav) => {
    isFav ? dispatch(removeFavorite(props)) : dispatch(addFavorite(props))
  }

  const handleBusketClick = (isBusket) => {
    isBusket ? dispatch(removeBook(props)) : dispatch(addBook(props))
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
