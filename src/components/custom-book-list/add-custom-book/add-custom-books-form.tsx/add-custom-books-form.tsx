import React from 'react'
import { MyModal } from '../../../modal/modal'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from '../../../../services/store'
import { setAddCustomBook } from '../../../../services/custom-books/reducer'
import { MyButton } from '../../../my-button/my-button'
import * as styles from './add-custom-books-form.module.css'
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
          <div className={styles.add_form}>
            <form>
              <input type='text' placeholder='Ваш никнейм' />
              <input type='text' placeholder='Название вашей книги' />
              <input type='text' placeholder='Автор' />
              <input type='text' placeholder='Год издания' />
              <input type='text' placeholder='Описание' />
              <input type='file' placeholder='Изображение' />
            </form>
            <MyButton text={'Добавить'} onClick={() => {}} />
          </div>
        </MyModal>
      )}
    </>
  )
}
