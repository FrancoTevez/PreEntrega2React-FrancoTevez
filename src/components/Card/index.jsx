import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./card.module.css"

function Card({product}) {
  return (
    <Link to={`/${product.category}/${product.id}`}>
      <div className={styles.contenedor}>
          <img src={`.${product.image}`} alt={product.title} />
          <h2>{product.title}</h2>
      </div>
    </Link>
  )
}

export default Card