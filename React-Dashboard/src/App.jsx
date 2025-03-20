import MiniDrawer from './components/Drawer'
import Fetch from './pages/Products'
import { Route,Routes } from 'react-router-dom'
import Catagories from './pages/Catagories'
function App() {
  
  return (
    
    <>
      <Routes>
        <Route path='/products' element={<Fetch />} />
        <Route path='/' element={<MiniDrawer />} />
        <Route path='/catagories' element={<Catagories/>}/>
      </Routes>

    

    </>
  )
}

export default App
