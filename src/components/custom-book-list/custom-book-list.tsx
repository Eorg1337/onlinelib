import React from 'react'
import { AddCustomBook } from './add-custom-book/add-custom-book'
import * as styles from './custom-books-list.module.css'
import { AddCustomBooksForm } from './add-custom-book/add-custom-books-form.tsx/add-custom-books-form'
import { SearchCustomBooksForm } from './add-custom-book/search-custom-books/search-custom-book-form/search-custom-book-form'
import { SearchCustomBooks } from './add-custom-book/search-custom-books/search-custom-books'
export const CustomBooksList: React.FC = () => {
  return (
    <div className={styles.main_wrapper}>
      <div className={styles.btns}>
        <SearchCustomBooks />
        <AddCustomBook />
        <AddCustomBooksForm />
        <SearchCustomBooksForm />
      </div>
    </div>
  )
}
