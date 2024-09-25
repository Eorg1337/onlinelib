import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import {
  useSelector as selectorHook,
  useDispatch as dispatchHook,
  TypedUseSelectorHook
} from 'react-redux'

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useDispatch = () => dispatchHook<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export default store
