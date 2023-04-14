import React from 'react'
import styles from "./checkout.module.css"
import Brief from '../Brief'
import CheckOutDetalles from '../CheckOutDetalles'

function CheckOut() {
  return (
    <div className={styles.contenedor}>
        <h1>CHECKOUT</h1>
        <div className={styles.contBrief}>
            <Brief />
            <CheckOutDetalles />
        </div>
    </div>
  )
}

export default CheckOut