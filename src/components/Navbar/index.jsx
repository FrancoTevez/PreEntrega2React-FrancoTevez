import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget'
import Catalogo from '../Catalogo'
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.contenedor}>
        <Link to="/"> 
            <span className={styles.brand}>MODUZ.</span>
        </Link>
        <Catalogo />
        <CartWidget />  
    </nav>
  )
}

export default Navbar