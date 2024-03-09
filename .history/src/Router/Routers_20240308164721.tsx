import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}
