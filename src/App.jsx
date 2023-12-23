import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'

import Info from './Pages/Info/Info.jsx'
import Create from './Pages/Create/Create.jsx'
import Cards from './Pages/Cards/Cards.jsx'

import data from './data.json'

import './style/App.scss'

function App() {
  const [cards, setCards] = useState(data)

  return (
    <>
      <Router>

        <header>
          <h1>Hello world</h1>
          <NavLink to='/'>Главная</NavLink>
          <NavLink to='/create'>Создать</NavLink>
          <NavLink to='/cards'>Слайдер</NavLink>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Info cards={cards} setCards={setCards} />} />
            <Route path='/create' element={<Create  cards={cards} setCards={setCards} />} />
            <Route path='/cards' element={<Cards  cards={cards} setCards={setCards} />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
