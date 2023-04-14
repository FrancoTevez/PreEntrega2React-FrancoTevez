import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import db from '../db/firebase-config'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import CheckOut from './components/CheckOut'
import Footer from './components/Footer'

function App() {
  const [products, setProducts] = useState([])
  const itemsRef = collection(db, "items")

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef)
    const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    setProducts(items)
  }
  useEffect(() => {
    getItems()       
  }, [])
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer products={products} />}/>
        <Route path='/:category' element={<ItemListContainer products={products} />}/>
        <Route path='/:category/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<CheckOut />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
