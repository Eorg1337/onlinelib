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
        <div className='modal_container'>
          <img
            src={
              activeBook.cover_edition_key
                ? `https://covers.openlibrary.org/b/olid/${activeBook.cover_edition_key}-M.jpg`
                : noImage
            }
          />
          <h2></h2>
          <p>
            {activeBook.author_name?.[0] ||
              activeBook.authors?.[0].name ||
              'Unknown'}
          </p>
          <p>{activeBook.first_publish_year}</p>
          <h3 className='desc'>Какое-то описание</h3>
        </div>
      )}
    </>
  )
}
