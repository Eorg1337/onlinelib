import React from 'react'
import * as styles from './busket-card.module.css'
import noImage from '../../images/no-image.png'
import { MyButton } from '../my-button/my-button'
import { useDispatch } from '../../services/store'
import { removeBook } from '../../services/busket/reducer'
import { BookProps } from '../../utils/interfaces/interfaces'
export const BusketCard: React.FC<BookProps> = ({
  uniq_key,
  cover,
  name,
  author,
  year,
  price
}) => {
  const dispatch = useDispatch()
  const handleDeleteBook = (uniq_key: string | number) => {
    dispatch(removeBook(uniq_key))
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
          <h2>{name}</h2>
          <p className={styles.author}>{author}</p>
          <p className={styles.year}>{year}</p>
          <MyButton
            text='Удалить'
            customClass='small_btn'
            onClick={() => handleDeleteBook(uniq_key)}
          />
        </div>
      </div>
      <p className={styles.price}>{price} RUB</p>
    </div>
  )
}
