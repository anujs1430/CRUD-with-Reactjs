import React from 'react'
import CreateData from './components/CreateData'
import ReadData from './components/ReadData'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditData from './components/EditData'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<CreateData />} />
        <Route path={'/readData'} element={<ReadData />} />
        <Route path={'/editData'} element={<EditData />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
