import { MyModal } from '../modal/modal'
import { BookDetails } from '../book-details/book-details'
import { useDispatch, useSelector } from '../../services/store'
import { useNavigate, useLocation } from 'react-router-dom'
import { fetchDelBookActive } from '../../services/books/reducer'
export const ActiveBook = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const activeBook = useSelector((state) => state.bookSlice.activeBook)
  const handleCloseModal = () => {
    dispatch(fetchDelBookActive())
    navigate(-1)
  }
  return (
    <>
      {activeBook && (
        <MyModal onClose={handleCloseModal}>
          <BookDetails />
        </MyModal>
      )}
    </>
  )
}
