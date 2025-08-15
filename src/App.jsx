
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Books from './pages/Books'
import BookAdd from './pages/BookAdd'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book-list' element={<Books/>} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/add-books' element={<BookAdd/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
