import { useSelector, useDispatch } from '../../services/store'
import { useEffect } from 'react'
import {
  fetchBooksStart,
  fetchBooksSuccess,
  fetchBooksFailure
} from '../../services/books/reducer'
import { fetchBook } from '../api/api'

export const useBookList = (query: string) => {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector((state) => state.bookSlice)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      dispatch(fetchBooksStart())
      try {
        const response = await fetchBook(query)
        dispatch(
          fetchBooksSuccess(response.works ? response.works : response.docs)
        )
      } catch (error: any) {
        dispatch(fetchBooksFailure(error.toString()))
      }
    }

    fetchData()
  }, [query, dispatch])

  return { books, loading, error }
}
