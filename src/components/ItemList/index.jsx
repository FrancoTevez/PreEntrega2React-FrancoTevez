import React from 'react'
import Card from '../Card'
import styles from "./itemList.module.css"

export default function ItemList({products}) {
  return (
    <div className={styles.contenedor}>
        {products.map((product) => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}