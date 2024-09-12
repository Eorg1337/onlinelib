import React, { useCallback, useState } from 'react'
import styles from './header.module.css'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false)
  const navigate = useNavigate()

  const handleClickedFav = useCallback(() => {
    setIsFavoriteOpen((prevState) => !prevState)
    navigate(!isFavoriteOpen ? '/favs' : '/')
  }, [isFavoriteOpen, navigate])

  return (
    <header>
      <div className={styles.maintext_container}>
        <h1 className={styles.main_text}>Online Library</h1>
      </div>
      <div>
        <button className={styles.favBooks} onClick={handleClickedFav}>
          {!isFavoriteOpen ? 'Избранные' : 'Главная'}
        </button>
      </div>
    </header>
  )
}
