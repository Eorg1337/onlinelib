import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { FavoritePage } from './pages/favorite-page/favorite-page'
import { Header } from './components/header/header'
import BookList from './components/book-list/book-list'
import FavoriteBookList from './components/favorite-book-list/favorite-book-list'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='favs' element={<FavoriteBookList />} />
      </Routes>
    </>
  )
}

export default App
