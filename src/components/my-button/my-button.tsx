import React from 'react'
import * as styles from './my-button.module.css'
import { BtnProps } from '../../utils/interfaces/interfaces'
export const MyButton: React.FC<BtnProps> = ({
  text,
  onClick,
  children,
  customClass
}) => {
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
