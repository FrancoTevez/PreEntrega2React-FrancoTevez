import React, { useContext } from 'react'
import styles from "./cartResume.module.css"
import { CounterContext } from '../context/CounterContext'
import { Link } from 'react-router-dom'

function CartResume() {
    const {priceTotal} = useContext(CounterContext)

    return (
        <section className={styles.contCompra}>
            <h2 className={styles.titleCompra}>RESUMEN DE COMPRA</h2>
            <div className={styles.contPrice}>
                <p>TOTAL:</p>
                <p>${priceTotal}</p>
            </div>
            <Link to="/checkout" className={styles.linkCheck}>
                <button type='button' className={styles.buttonFinalizar}>Finalizar Compra</button>
            </Link>
            <Link to="/" className={styles.spanSeguir}> 
                <span>Seguir comprando</span>
            </Link>
        </section>
    )
}

export default CartResume