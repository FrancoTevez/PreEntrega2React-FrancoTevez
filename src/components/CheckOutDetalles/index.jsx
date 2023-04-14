import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import styles from "./checkOutDetalles.module.css"
import BriefCard from '../BriefCard'

function CheckOutDetalles() {
    const {items} = useContext(CounterContext)

    return (
        <div className={styles.contenedor}>
            <h2 className={styles.titleResumen}>RESUMEN DE COMPRA</h2>
            {items.map(item => (
                <BriefCard item={item} key={item.id}/>
            ))}
        </div> 
    )
}

export default CheckOutDetalles