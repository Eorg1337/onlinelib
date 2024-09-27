import React from 'react'
import noImage from '../../images/no-image.png'
import * as styles from './book-details.module.css'
import { useSelector } from '../../services/store'
export const BookDetails: React.FC = () => {
  const activeBook = useSelector((state) => {
    return (
      state.bookSlice.activeBook &&
      state.bookSlice.books.find((b) => {
        return b.cover_edition_key === state.bookSlice.activeBook
      })
    )
  })

  return (
    <>
      {activeBook && (
        <div className={styles.details_container}>
          <img
            className={styles.cover}
            src={
              activeBook.cover_edition_key
                ? `https://covers.openlibrary.org/b/olid/${activeBook.cover_edition_key}-M.jpg`
                : noImage
            }
          />
          <h2>{activeBook.title}</h2>
          <p className={styles.author}>
            {activeBook.author_name?.[0] ||
              activeBook.authors?.[0].name ||
              'Unknown'}
          </p>
          <p className={styles.year}>{activeBook.first_publish_year}</p>
          <div className={styles.desc}>
            <h3>
              Какое-то описание...
              sdfjsdflskdjflsdkjflskdjflsdfjlsdkfjlskdfjslkfjslkdfjslkfjslkdfjlskdfjlk
            </h3>
          </div>
        </div>
      )}
    </>
  )
}
