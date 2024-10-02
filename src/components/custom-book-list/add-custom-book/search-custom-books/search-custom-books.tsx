import React from 'react'
import { MyButton } from '../../../my-button/my-button'
import { useDispatch } from '../../../../services/store'
import { setFindCustomBook } from '../../../../services/custom-books/reducer'
export const SearchCustomBooks = () => {
  const dispatch = useDispatch()

  const handleOpenSearchModal = () => {
    dispatch(setFindCustomBook(true))
  }

  return (
    <>
      <MyButton
        text='Добавленные книги...'
        customClass={'search_btn'}
        onClick={handleOpenSearchModal}
      />
    </>
  )
}
