import React, { useCallback } from 'react'
import styles from './filter.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  setBookFilter,
  setAuthorFilter,
  setYearFilter
} from '../../services/filter/reducer'

const MyFilter = ({ type, name, placeholder }) => {
  const dispatch = useDispatch()

  const inputValue = useSelector((state) => {
    if (name === 'book') {
      return state.filterSlice.book
    } else if (name === 'author') {
      return state.filterSlice.author
    } else if (name === 'year') {
      return state.filterSlice.year
    }
    return ''
  })

  const handleChange = useCallback((e) => {
    const value = e.target.value
    if (name === 'book') {
      dispatch(setBookFilter(value))
    } else if (name === 'author') {
      dispatch(setAuthorFilter(value))
    } else if (name === 'year') {
      dispatch(setYearFilter(value))
    }
  }, [])

  return (
    <>
      <input
        type={type}
        name={name}
        className={styles.filter}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  )
}

export default MyFilter
