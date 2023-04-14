import React, { useContext } from 'react'
import styles from "./counter.module.css"
import { CounterContext } from '../context/CounterContext'

function Counter() {
    const { length } = useContext(CounterContext) 
    return (
        <p className={styles.contador}>{length}</p>
    )
}

export default Counter