import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../components/pages/Gallery'
import DetailProject from '../components/pages/detailProject/DetailProject'
import App from '../App'

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/project/:id' element={<DetailProject/>}/>
    </Routes>
  )
}
