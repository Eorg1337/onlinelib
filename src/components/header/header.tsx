import React, { useCallback, useState } from 'react'
import styles from './header.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { MyButton } from '../my-button/my-button'
import { useSelector } from 'react-redux'

export const Header = () => {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)
  const [isBusketOpen, setIsBusketOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const busketCount = useSelector(
    (state: any) => state.busketSlice.pickedBooks
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
    navigate(path)
  }

  return (
    <header>
      <div className={styles.maintext_container}>
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
      </div>
    </header>
  )
}
