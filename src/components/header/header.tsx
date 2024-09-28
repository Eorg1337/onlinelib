import React, { useState } from 'react'
import * as styles from './header.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { MyButton } from '../my-button/my-button'
import { useSelector } from '../../services/store'

export const Header = () => {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)
  const [isBusketOpen, setIsBusketOpen] = useState(false)
  const [isCustomBooksOpen, setIsCustomBooksOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const busketCount = useSelector(
    (state) => state.busketSlice.pickedBooks
  ).length
  // TODO
  // В данном случае нет смысла использовать useCallback - он нужен для функций которые передаются в компоненты, чтобы они не перерисовывались
  const handleClickedBtn = (path: string) => {
    if (path === '/favs' || location.pathname === '/favs') {
      setIsFavoriteOpen((prevState) => !prevState)
    }
    if (path === '/busket' || location.pathname === '/busket') {
      setIsBusketOpen((prevState) => !prevState)
    }
    if (path === '/custom_books' || location.pathname === '/custom_books') {
      setIsCustomBooksOpen((prevState) => !prevState)
    }
    navigate(path)
  }

  /*const handleAddCustomBook = async () => {
    const bookData = {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }

    try {
      const response = await fetch('http://localhost:3000/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookData)
      })

      if (response.ok) {
        const result = await response.json()
        console.log('Book added:', result)
      } else {
        console.error('Error adding book:', response.statusText)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }*/

  return (
    <header>
      <div>
        <h1 className={styles.main_text}>Online Library</h1>
      </div>
      <div>
        <MyButton
          text={!isFavoriteOpen ? 'Избранные ' : 'Главная'}
          onClick={() => handleClickedBtn(isFavoriteOpen ? '/' : '/favs')}
        />
        <MyButton
          text={!isBusketOpen ? 'Корзина ' : 'Главная'}
          onClick={() => handleClickedBtn(isBusketOpen ? '/' : '/busket')}
        >
          <span className={styles.busket_count}>{busketCount}</span>
        </MyButton>
        <MyButton
          text={!isCustomBooksOpen ? 'Мои книги' : 'Главная'}
          onClick={() =>
            handleClickedBtn(isCustomBooksOpen ? '/' : '/custom_books')
          }
        />
      </div>
    </header>
  )
}
