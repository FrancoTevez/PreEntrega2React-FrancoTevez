import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CategoryListContainer from './components/CategoryListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('../productos.json')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer products={products} />}/>
        <Route path='/:category' element={<CategoryListContainer products={products} />}/>
        <Route path='/:category/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </>
  )
}

export default App
