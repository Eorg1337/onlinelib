import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { FavoritePage } from './pages/favorite-page/favorite-page'
import { Header } from './components/header/header'
import { NotFoundPage } from './pages/not-found-page/not-found-page'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='favs' element={<FavoritePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
