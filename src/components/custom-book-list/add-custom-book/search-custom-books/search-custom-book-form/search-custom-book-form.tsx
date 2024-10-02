import React from 'react'
import { MyInput } from '../../../../my-input/my-input'
import { useSelector, useDispatch } from '../../../../../services/store'
import { setFindCustomBook } from '../../../../../services/custom-books/reducer'
import { MyModal } from '../../../../modal/modal'
import { MyButton } from '../../../../my-button/my-button'
import { MyForm } from '../../../../my-form/my-form'
export const SearchCustomBooksForm: React.FC = () => {
  const isSearchCustomBook = useSelector(
    (state) => state.customBookSlice.findCustomBook
  )

  const dispatch = useDispatch()

  const handleCloseFindBookModal = () => {
    dispatch(setFindCustomBook(false))
  }

  return (
    <>
      {isSearchCustomBook && (
        <MyModal onClose={handleCloseFindBookModal}>
          <MyForm action={'Submit'}>
            <MyInput type={'text'} placeholder={'Введите ваш никнейм'} />
            <MyButton text={'Поиск'} onClick={() => {}} />
          </MyForm>
        </MyModal>
      )}
    </>
  )
}
