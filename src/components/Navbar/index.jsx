import React from 'react'
import CartWidget from '../CartWidget'
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.contenedor}>
        <span className={styles.brand}>MODUZ.</span>
        <input type="text" placeholder='Que estás buscando?' id='buscador' className={styles.buscador}/>
        <CartWidget /> 
    </nav>
  )
}

export default Navbar