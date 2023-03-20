import React from 'react'
import ItemList from '../ItemList'
import styles from './item.module.css'

function ItemListContainer({products}) {
  return (
    <div className={styles.contenedor}>
      <h1>TODOS NUESTROS PRODUCTOS</h1>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer