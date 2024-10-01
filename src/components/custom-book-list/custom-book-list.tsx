import React from 'react'
import { AddCustomBook } from './add-custom-book/add-custom-book'
import * as styles from './custom-books-list.module.css'
import { MyButton } from '../my-button/my-button'
import { AddCustomBooksForm } from './add-custom-book/add-custom-books-form.tsx/add-custom-books-form'
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
        <AddCustomBooksForm />
      </div>
    </div>
  )
}
