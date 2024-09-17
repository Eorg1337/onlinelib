import React from 'react'
import styles from './busket-card.module.css'
import noImage from '../../images/no-image.png'
import { MyButton } from '../my-button/my-button'
import { useDispatch } from 'react-redux'
import { removeBook } from '../../services/busket/reducer'
export const BusketCard = ({ cover, name, author, year, price }) => {
  const dispatch = useDispatch()
  const handleDeleteBook = (cover) => {
    console.log(cover)
    dispatch(removeBook(cover))
  }

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.info_wrapper}>
        <img
          src={
            cover
              ? `https://covers.openlibrary.org/b/olid/${cover}-M.jpg`
              : noImage
          }
          alt='Обложка книги'
          className={styles.cover}
        />
        <div className={styles.text_info}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.author}>{author}</p>
          <p className={styles.year}>{year}</p>
          <MyButton
            text='Удалить'
            customClass='small_btn'
            onClick={() => handleDeleteBook(cover)}
          />
        </div>
      </div>
      <p className={styles.price}>{price} RUB</p>
    </div>
  )
}
