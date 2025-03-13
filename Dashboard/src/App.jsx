import { useState } from 'react'
import BasicBars from './components/Charts'
import MiniDrawer from './components/Drawer'
import PieArcLabel from './components/Piechart'
import MarkOptimization from './components/Graph'
import { Stack } from '@mui/material'
import Fetch from './pages/Products'
import { Route,Routes } from 'react-router-dom'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/products' element={<Fetch />} />
        <Route path='/' element={<MiniDrawer />} />
      </Routes>
{/* <Fetch /> */}
    {/* <MiniDrawer /> */}
    

    </>
  )
}

export default App
