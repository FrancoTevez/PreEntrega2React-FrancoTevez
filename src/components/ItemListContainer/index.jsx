import React, { useContext, useEffect, useState } from 'react'
import ItemList from '../ItemList'
import styles from './item.module.css'
import { useParams } from 'react-router-dom'
import CircularIndeterminate from '../CircularIndeterminate'
import { CounterContext } from '../context/CounterContext'

function ItemListContainer({products}) {
  const {getCant} = useContext(CounterContext)
  const [load, setLoad] = useState(true)
  const [productos, setProductos] = useState([])
  const { category } = useParams()

  const getProduct = () => {
    if(category != undefined){
      const prod = products.filter(producto => producto.category == category)
      setProductos(prod)
    }else{
      setProductos(products)
    }
    setTimeout(() => {
      setLoad(false)
    }, 1000);
    
  }
  
  useEffect(() => {
    getProduct()
    getCant()
  }, [products, category])
  

  return (
    <div className={styles.contenedor}>
      {category == undefined ? <h1>TODOS NUESTROS PRODUCTOS</h1> : <h1>{category.toUpperCase()}</h1>}
      {load ? <CircularIndeterminate /> : <ItemList products={productos}/>}
    </div>
  )
}

export default ItemListContainer