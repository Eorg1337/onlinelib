import React, { useState, useCallback } from 'react'
import styles from './filter.module.css'
import { useSelector, useDispatch } from '../../services/store'
import {
  setBookFilter,
  setAuthorFilter,
  setYearFilter
} from '../../services/filter/reducer'
import { debounce } from '../../utils/funcs/debounce'
import { FilterProps } from '../../utils/interfaces/interfaces'
const MyFilter: React.FC<FilterProps> = ({ type, name, placeholder }) => {
  const dispatch = useDispatch()
  const inputValue = useSelector((state) => {
    if (name === 'book') return state.filterSlice.book
    if (name === 'author') return state.filterSlice.author
    if (name === 'year') return state.filterSlice.year
    return ''
  })

  const [input, setInput] = useState(inputValue)
  // TODO реализовать свою версию функции debbonce (иногда просят на собесах написать) - complete
  const debouncedDispatch = useCallback(
    debounce((value: string) => {
      if (name === 'book') dispatch(setBookFilter(value))
      else if (name === 'author') dispatch(setAuthorFilter(value))
      else if (name === 'year') dispatch(setYearFilter(value))
    }, 500),
    [dispatch, name]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInput(value)
    debouncedDispatch(value)
  }

  return (
    <input
      type={type}
      name={name}
      className={styles.filter}
      placeholder={placeholder}
      value={input}
      onChange={handleChange}
    />
  )
}

export default MyFilter
