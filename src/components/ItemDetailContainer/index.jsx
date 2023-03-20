import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import styles from "./detailContainer.module.css"

function ItemDetailContainer()  {

    return (
    <div className={styles.contenedor}>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer