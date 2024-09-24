import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure
} from '../../services/books/reducer'
import { fetchBook } from '../../utils/api/api'
export const useBookList = (query) => {
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
