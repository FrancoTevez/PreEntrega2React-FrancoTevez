import React from 'react'
import Card from '../Card'
import styles from "./categoryList.module.css"

function CategoryList({products}) {
  return (
    <div className={styles.contenedor}>
        {products.map(product => (
            <Card key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default CategoryList