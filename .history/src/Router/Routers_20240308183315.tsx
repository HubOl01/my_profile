import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Common from '../components/center/Common'
import Gallery from '../components/center/Gallery'

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Common/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        
    </Routes>
  )
}
