import React from 'react'
import styles from "./brief.module.css"

function Brief() {
  return (
    <div>
        <form className={styles.form}>
            <input type="text" placeholder='Nombre'/>
            <input type="text" placeholder='Apellido'/>
            <input type="email" placeholder='Email'/>
            <input type="email" placeholder='Confirma tu Email'/>
            <button type='submit' className={styles.buttonCompra}>Realizar Compra</button>
        </form>
    </div>
  )
}

export default Brief