import React from 'react'
import styles from './not-found-page.module.css'
import { useNavigate } from 'react-router-dom'
export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const handleBackToMain = () => {
    navigate('/')
  }

  return (
    <div className={styles.mainwrapper}>
      <h1 className={styles.main_text}>Страница не найдена...</h1>
      <h3>Предлагаю перейти на главную страницу😀</h3>
      <button className={styles.backbtn} onClick={handleBackToMain}>
        Вернуться на главную
      </button>
    </div>
  )
}
