import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NoteDetailPage from './pages/NotedetailPage'
import CreatePage from './pages/createPage'
import toast from 'react-hot-toast'



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
