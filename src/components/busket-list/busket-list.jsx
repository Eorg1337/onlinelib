import React from 'react'
import { BusketCard } from '../busket-card/busket-card'
import { useSelector } from 'react-redux'
import styles from './busket.module.css'
export const BusketList = () => {
  const busketBooks = useSelector((state) => state.busketSlice.pickedBooks)
  return (
    <>
      <h1 className={styles.picked_list}>Список выбранных товаров:</h1>
      {busketBooks &&
        busketBooks.map((book, index) => {
          return (
            <BusketCard
              key={book.cover ? book.cover : index}
              cover={book.cover}
              name={book.name}
              author={book.author || 'Unknown'}
              year={book.year || 'Unknown'}
              price={book.price}
            />
          )
        })}
    </>
  )
}
