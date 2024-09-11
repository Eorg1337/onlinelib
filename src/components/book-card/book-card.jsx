import React from 'react'
import Book from '../book/book'
import styles from './book-card.module.css'

export const BookCard = (props) => {
  return (
    <Book
      {...props}
      render={(data, onClick, isFavorite) => {
        return (
          <div className={styles.book_wrapper}>
            <span
              className={styles.favorites}
              onClick={() => onClick(isFavorite)}
            >
              {isFavorite ? '★' : '☆'}
            </span>
            <img
              src={`https://covers.openlibrary.org/b/olid/${data.cover}-M.jpg`}
              alt='Обложка книги'
              className={styles.book_cover}
            />
            <div className={styles.info_wrapper}>
              <p className={styles.name}>{data.name}</p>
              <p className={styles.author}>{data.author}</p>
              <p className={styles.year}>{data.year}</p>
            </div>
          </div>
        )
      }}
    />
  )
}
