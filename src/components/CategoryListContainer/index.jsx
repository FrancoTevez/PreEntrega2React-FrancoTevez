import React from 'react'
import { useParams } from 'react-router-dom'
import CategoryList from '../CategoryList'
import styles from "./categoryContainer.module.css"

function CategoryListContainer({products}) {
    const { category } = useParams()
    const categoria = products.filter(produc => produc.category == category)
    return (
        <div className={styles.contenedor}>
            <h1>{category.toLocaleUpperCase()}</h1>
            <CategoryList products={categoria}/>
        </div>
  )
}

export default CategoryListContainer