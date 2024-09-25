import React from 'react'
import { BookCard } from '../book-card/book-card'
import { useSelector } from '../../services/store'
import styles from './favorite-book-list.module.css'
import { selectFavorites } from '../../utils/constants/constants'
import { BookProps } from '../../utils/interfaces/interfaces'
const FavoriteBookList = () => {
  const favoriteBooks = useSelector(selectFavorites)
  return (
    <div className={styles.favs_container}>
      {favoriteBooks.map((book: BookProps, index: number) => {
        return (
          <BookCard
            key={book.cover ? book.cover : index}
            uniq_key={
              book.cover
                ? book.cover
                : Math.floor(book.year * 0.5) * book.name.length
            }
            name={book.name}
            author={book.author}
            year={book.year}
            cover={book.cover}
            handleAddFavoriteBook={book.handleAddFavoriteBook}
            isFav={book.isFav}
            price={book.price}
          />
        )
      })}
    </div>
  )
}

export default FavoriteBookList
