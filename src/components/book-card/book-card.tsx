import React from 'react'
import Book from '../book/book'
import { BookProps } from '../../utils/interfaces/interfaces'
import * as styles from './book-card.module.css'
import noImage from '../../images/no-image.png'
export const BookCard: React.FC<BookProps> = (props) => {
  return (
    <Book
      {...props}
      render={(data, onFav, onBusket, onActive, isBusket, isFavorite) => {
        return (
          <div className={styles.book_wrapper}>
            <span
              className={styles.favorites}
              onClick={() => onFav(isFavorite)}
            >
              {isFavorite ? '★' : '☆'}
            </span>
            <img
              src={
                data.cover
                  ? `https://covers.openlibrary.org/b/olid/${data.cover}-M.jpg`
                  : noImage
              }
              alt='Обложка книги'
              className={styles.book_cover}
              onClick={onActive}
            />
            <div className={styles.info_wrapper}>
              <div className={styles.top}>
                <p>{data.name}</p>
                <button
                  className={isBusket ? styles.busket_active : styles.busket}
                  onClick={() => onBusket(isBusket)}
                >
                  🛒
                </button>
              </div>
              <div className={styles.top}>
                <p>{data.author}</p>
                <p>{data.price} RUB</p>
              </div>
              <p>{data.year}</p>
            </div>
          </div>
        )
      }}
    />
  )
}
