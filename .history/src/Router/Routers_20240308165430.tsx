import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Common from '../components/center/Common'

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Common/>}/>
        <Route path='/' element={<Common/>}/>
        
    </Routes>
  )
}
