import React from 'react'
import HomePage from './components/HomePage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddFav from './components/AddFav'

export default function App() {
  return (
    <div className='container py-20 m-auto'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/add' Component={AddFav}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
