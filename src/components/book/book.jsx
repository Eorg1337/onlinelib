import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../services/favorites/reducer'
import { addBook, removeBook } from '../../services/busket/reducer'
const Book = ({ render, ...props }) => {
  const price = Math.floor(props.year * 0.5)
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
    isBusket
      ? dispatch(removeBook(props.cover))
      : dispatch(addBook({ ...props, price }))
  }
  return (
    <>
      {render(
        props,
        price,
        handleFavoriteClick,
        handleBusketClick,
        isBusket,
        isFavorite
      )}
    </>
  )
}

export default Book
