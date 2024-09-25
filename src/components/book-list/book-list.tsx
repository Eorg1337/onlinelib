import React, { useMemo } from 'react'
import { BookCard } from '../book-card/book-card'
import * as styles from './book-list.module.css'
import Loader from '../loader/loader'
import MyFilter from '../filter/filter'
import { useSelector } from '../../services/store'
import {
  selectBookFilter,
  selectAuthorFilter,
  selectYearFilter
} from '../../utils/constants/constants'
import { useBookList } from '../../utils/hooks/use-book-list'
import { BookPropsInit } from '../../utils/interfaces/interfaces'
// TODO вынести в отдельную директорию с утилитами

const BookList: React.FC = () => {
  const bookFilter = useSelector(selectBookFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const yearFilter = useSelector(selectYearFilter)
  const { books, loading, error } = useBookList(bookFilter)
  const filteredBookList = useMemo(() => {
    return books?.filter((book: BookPropsInit) => {
      const matchesAuthor = authorFilter
        ? book.author_name?.[0]
            .toLowerCase()
            .includes(authorFilter.toLowerCase())
        : true
      const matchesYear = yearFilter
        ? String(book.first_publish_year).includes(yearFilter)
        : true
      return matchesAuthor && matchesYear
    })
  }, [books, authorFilter, yearFilter])
  return (
    <>
      <div className={styles.filters}>
        <MyFilter
          type={'text'}
          name={'book'}
          placeholder={'Введите название книги...'}
        />
        <MyFilter
          type={'text'}
          name={'author'}
          placeholder={'Введите автора...'}
        />
        <MyFilter type={'text'} name={'year'} placeholder={'Введите год...'} />
      </div>
      {error && <div>Ошибка загрузки данных...</div>}
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.book_list}>
          {filteredBookList?.length > 0 &&
            filteredBookList.map((book: BookPropsInit, index: number) => {
              return (
                <BookCard
                  key={book.cover_edition_key ? book.cover_edition_key : index}
                  name={book.title}
                  author={
                    book.author_name?.[0] || book.authors?.[0].name || 'Unknown'
                  }
                  year={book.first_publish_year}
                  cover={book.cover_edition_key}
                  price={Math.floor(book.first_publish_year * 0.5)}
                  uniq_key={
                    book.cover_edition_key
                      ? book.cover_edition_key
                      : Math.floor(book.first_publish_year * 0.5) *
                        book.title.length
                  }
                />
              )
            })}
        </div>
      )}
    </>
  )
}

export default BookList
