import React from 'react'
import styles from './my-button.module.css'
export const MyButton = ({ text, onClick }) => {
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {text}
      </button>
    </>
  )
}
