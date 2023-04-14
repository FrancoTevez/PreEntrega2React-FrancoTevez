import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList'
import styles from './item.module.css'
import { useParams } from 'react-router-dom'
import CircularIndeterminate from '../CircularIndeterminate'

function ItemListContainer({products}) {
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
    setLoad(false)
  }
  
  useEffect(() => {
    setTimeout(() => {
      getProduct()
    }, 1000);
    
  }, [products, category])
  

  return (
    <div className={styles.contenedor}>
      {category == undefined ? <h1>TODOS NUESTROS PRODUCTOS</h1> : <h1>{category.toUpperCase()}</h1>}
      {load ? <CircularIndeterminate /> : <ItemList products={productos}/>}
    </div>
  )
}

export default ItemListContainer