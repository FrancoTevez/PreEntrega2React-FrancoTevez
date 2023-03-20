import React, { useState } from 'react'
import styles from "./countAdd.module.css"

function CountAdd() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.main}>
            <div className={styles.contenedor}>
                <button type='button' onClick={() => {if(count > 0){setCount(count - 1)}}} className={styles.button}>-</button>
                <p>{count}</p>
                <button type='button' onClick={() => setCount(count + 1)} className={styles.button}>+</button>
            </div>
            <button type='button' className={styles.add} onClick={() => {
                setCount(0)
            }}>Agregar al Carrito</button>
        </div> 
    )
}

export default CountAdd