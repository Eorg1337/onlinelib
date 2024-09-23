import React, { useEffect, useMemo } from 'react'
import { BookCard } from '../book-card/book-card'
import { fetchBook } from '../../utils/api/api'
import styles from './book-list.module.css'
import Loader from '../loader/loader'
import MyFilter from '../filter/filter'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure
} from '../../services/books/reducer'
// TODO вынести в отдельную директорию с утилитами
const useBookList = (query) => {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector((state) => state.bookSlice)

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchBooksStart())
      try {
        const response = await fetchBook(query)
        dispatch(
          fetchBooksSuccess(response.works ? response.works : response.docs)
        )
      } catch (error) {
        dispatch(fetchBooksFailure(error.toString()))
      }
    }

    fetchData()
  }, [query, dispatch])

  return { books, loading, error }
}

const BookList = () => {
  const bookFilter = useSelector((state) => state.filterSlice.book)
  const authorFilter = useSelector((state) => state.filterSlice.author)
  const yearFilter = useSelector((state) => state.filterSlice.year)
  const { books, loading, error } = useBookList(bookFilter)
  const filteredBookList = useMemo(() => {
    return books?.filter((book) => {
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
      {error && <div className={styles.error}>Ошибка загрузки данных...</div>}
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.book_list}>
          {filteredBookList?.length > 0 &&
            filteredBookList.map((book, index) => {
              return (
                <BookCard
                  key={book.cover_edition_key ? book.cover_edition_key : index}
                  name={book.title}
                  author={
                    book.author_name?.[0] || book.authors?.[0].name || 'Unknown'
                  }
                  year={book.first_publish_year || 'Unknown'}
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
