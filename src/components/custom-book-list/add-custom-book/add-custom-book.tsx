import React from 'react'
import { MyButton } from '../../my-button/my-button'
import { setAddCustomBook } from '../../../services/custom-books/reducer'
import { useDispatch } from '../../../services/store'
export const AddCustomBook = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)
  const dispatch = useDispatch()
  const handleAddModal = () => {
    dispatch(setAddCustomBook(true))
    setIsAddModalOpen((prev) => !prev)
  }
  return (
    <>
      <MyButton
        text='+'
        customClass={'add_book_btn'}
        onClick={handleAddModal}
      />
    </>
  )
}
