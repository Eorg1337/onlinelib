import React from 'react'
import { MyModal } from '../../../modal/modal'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from '../../../../services/store'
import { setAddCustomBook } from '../../../../services/custom-books/reducer'
import { MyButton } from '../../../my-button/my-button'
import * as styles from './add-custom-books-form.module.css'
import { MyInput } from '../../../my-input/my-input'
import { MyForm } from '../../../my-form/my-form'
export const AddCustomBooksForm: React.FC = () => {
  const dispatch = useDispatch()
  const isAddCustomBook = useSelector(
    (state) => state.customBookSlice.addCustomBook
  )
  const navigate = useNavigate()
  const handleCloseModal = () => {
    dispatch(setAddCustomBook(false))
    navigate('/custom_books')
  }

  return (
    <>
      {isAddCustomBook && (
        <MyModal onClose={handleCloseModal}>
          <MyForm action={'Submit'}>
            <MyInput type={'text'} placeholder={'Ваш никнейм'} />
            <MyInput type={'text'} placeholder={'Название вашей книги'} />
            <MyInput type={'text'} placeholder={'Автор'} />
            <MyInput type={'text'} placeholder={'Год издания'} />
            <MyInput type={'text'} placeholder={'Описание'} />
            <MyInput type={'text'} placeholder={'Изображение'} />
            <MyButton text={'Добавить'} onClick={() => {}} />
          </MyForm>
        </MyModal>
      )}
    </>
  )
}
