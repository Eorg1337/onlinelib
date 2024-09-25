import React from 'react'
import { BusketCard } from '../busket-card/busket-card'
import { useSelector } from '../../services/store'
import * as styles from './busket.module.css'
import { selectPickedBooks } from '../../utils/constants/constants'
import { BookProps } from '../../utils/interfaces/interfaces'
export const BusketList = () => {
  const busketBooks = useSelector(selectPickedBooks)
  return (
    <>
      <h1 className={styles.picked_list}>Список выбранных товаров:</h1>
      {busketBooks &&
        busketBooks.map((book: BookProps, index: number) => {
          return (
            <BusketCard
              key={book.cover ? book.cover : index}
              uniq_key={
                book.cover
                  ? book.cover
                  : Math.floor(book.year * 0.5) * book.name.length
              }
              cover={book.cover}
              name={book.name}
              author={book.author || 'Unknown'}
              year={book.year}
              price={book.price}
            />
          )
        })}
    </>
  )
}
