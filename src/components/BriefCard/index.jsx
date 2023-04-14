import React from 'react'
import styles from "./briefCard.module.css"

function BriefCard({item}) {
  return (
     <div className={styles.contenedor}>
        <h3 className={styles.titleProductos}>{item.title}</h3>
        <div className={styles.contImgPrecio}>
            <div className={styles.contImg}>
                <img src={`.${item.image}`} alt={item.title} />
                <p className={styles.pCantidad}>{item.cantidad}</p>
            </div>
            <p className={styles.pPrice}>${item.price}</p>
        </div>
    </div>
  )
}

export default BriefCard