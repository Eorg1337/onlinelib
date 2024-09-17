import React from 'react'
import styles from './my-button.module.css'
export const MyButton = ({ text, onClick, children, customClass }) => {
  return (
    <>
      <button
        className={`${styles.btn} ${customClass ? styles[customClass] : ''}`}
        onClick={onClick}
      >
        {text}
        {children ? children : null}
      </button>
    </>
  )
}
