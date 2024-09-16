import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../../services/favorites/reducer'
const Book = ({ render, ...props }) => {
  const isFavorite = useSelector((state) => state.favSlice.favorites).some(
    (item) => item.cover === props.cover
  )
  //доделать функционал корзины
  /*const isBusket = useSelector*/
  const dispatch = useDispatch()
  const handleFavoriteClick = (isFav) => {
    isFav ? dispatch(removeFavorite(props)) : dispatch(addFavorite(props))
  }

  return <>{render(props, handleFavoriteClick, isFavorite)}</>
}

export default Book
