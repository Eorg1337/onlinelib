import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { FavoritePage } from './pages/favorite-page/favorite-page'
import { Header } from './components/header/header'
import { NotFoundPage } from './pages/not-found-page/not-found-page'
import { BusketPage } from './pages/bukset-page/busket-page'
function App() {
  return (
    <>
      <Header />
      <Routes>
        // TODO вынести строки в константы
        <Route path='/' element={<MainPage />} />
        <Route path='favs' element={<FavoritePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='busket' element={<BusketPage />} />
      </Routes>
    </>
  )
}

// TODO
// Перевести проект на typescript
// Перевести приложение на FSD
// Внести возможности добавлять свою собственную книгу
// Использовать значения фильтров в url строке, чтобы при перезагрузке страницы они не сбрасывались
// Добавить модалку с деталями каждой книги.
// Создать отдельный динамический роут для каждой книги.
// Собрать react-проект на webpack, а не через cra
// Создать отдельную ветку проекта с react-query вместо RTK
// Написать unit-тесты редьюсеры и на компоненты. Можно ещё e2e тесты с помощью cypress или playwright

export default App
