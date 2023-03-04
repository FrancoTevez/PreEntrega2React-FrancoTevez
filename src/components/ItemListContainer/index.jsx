import React from 'react'
import styles from './item.module.css'

function ItemListContainer({greeting}) {
  return (
    <p className={styles.texto}>{greeting}</p>
  )
}

export default ItemListContainer