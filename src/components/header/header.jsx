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
    (state) => state.busketSlice.pickedBooks
  ).length
  const handleClickedBtn = useCallback(
    (path) => {
      if (path === '/favs' || location.pathname === '/favs') {
        setIsFavoriteOpen((prevState) => !prevState)
      }
      if (path === '/busket' || location.pathname === '/busket') {
        setIsBusketOpen((prevState) => !prevState)
      }
      navigate(path)
    },
    [isBusketOpen, isFavoriteOpen, navigate]
  )

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
