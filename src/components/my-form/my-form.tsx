import React from 'react'
import * as styles from './my-form.module.css'
import { MyFormProps } from '../../utils/interfaces/interfaces'

export const MyForm: React.FC<MyFormProps> = ({ action, children }) => {
  return (
    <>
      <form action={action} className={styles.my_form}>
        {children}
      </form>
    </>
  )
}
