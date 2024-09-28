import React from 'react'
import { MyButton } from '../../my-button/my-button'
export const AddCustomBook = () => {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false)
  const handleAddModal = () => {
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
