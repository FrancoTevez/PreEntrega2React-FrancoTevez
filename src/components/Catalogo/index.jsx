import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./catalogo.module.css"

function Catalogo() {
  return (
    <div className={styles.contenedor}>
      <Link to="/zapatillas">
        <p className={styles.texto}>ZAPATILLAS</p>
      </Link>
      <Link to="/botas">
        <p className={styles.texto}>BOTAS</p>
      </Link>
    </div> 
  )
}

export default Catalogo