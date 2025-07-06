import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import NoteDetailPage from './pages/NotedetailPage.jsx'
import CreatePage from './pages/CreatePage.jsx'



const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element = {<HomePage />}/>
        <Route path='/create' element = {<CreatePage />}/>
        <Route path='/note/:id' element={<NoteDetailPage /> }/>
      </Routes>

    </div>
  )
}

export default App
