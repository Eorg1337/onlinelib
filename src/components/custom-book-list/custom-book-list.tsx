import React from 'react'
import { AddCustomBook } from './add-custom-book/add-custom-book'
import * as styles from './custom-books-list.module.css'
import { MyButton } from '../my-button/my-button'
export const CustomBooksList = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.btns}>
        <MyButton
          text='Добавленные книги...'
          customClass={'search_btn'}
          onClick={() => {}}
        />
        <AddCustomBook />
      </div>
    </div>
  )
}
