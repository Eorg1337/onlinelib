import React from 'react'
import styles from './my-button.module.css'
export const MyButton = ({ text, onClick, children }) => {
  console.log(text)
  return (
    <>
      <button className={styles.btn} onClick={onClick}>
        {text}
        {children ? children : null}
      </button>
    </>
  )
}
