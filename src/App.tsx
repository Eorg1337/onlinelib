import './App.css'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main-page/main-page'
import { FavoritePage } from './pages/favorite-page/favorite-page'
import { Header } from './components/header/header'
import { NotFoundPage } from './pages/not-found-page/not-found-page'
import { BusketPage } from './pages/bukset-page/busket-page'
import {
  MAIN_PATH,
  FAV_PATH,
  BUSKET_PATH,
  NOT_FOUND_PATH
} from './utils/constants/constants'
function App() {
  return (
    <>
      <Header />
      <Routes>
        // TODO вынести строки в константы - complete
        <Route path={MAIN_PATH} element={<MainPage />} />
        <Route path={FAV_PATH} element={<FavoritePage />} />
        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
        <Route path={BUSKET_PATH} element={<BusketPage />} />
      </Routes>
    </>
  )
}

// TODO
// Перевести проект на typescript - complete
// Перевести приложение на FSD
// Внести возможности добавлять свою собственную книгу
// Использовать значения фильтров в url строке, чтобы при перезагрузке страницы они не сбрасывались
// Добавить модалку с деталями каждой книги.
// Создать отдельный динамический роут для каждой книги.
// Собрать react-проект на webpack, а не через cra
// Создать отдельную ветку проекта с react-query вместо RTK
// Написать unit-тесты редьюсеры и на компоненты. Можно ещё e2e тесты с помощью cypress или playwright

export default App
