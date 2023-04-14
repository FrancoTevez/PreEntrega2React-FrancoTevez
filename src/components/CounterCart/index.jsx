import React, { useContext, useEffect, useState } from 'react'
import db from '../../../db/firebase-config';
import { doc, updateDoc } from 'firebase/firestore';
import { CounterContext } from '../context/CounterContext';
import styles from "./countDelete.module.css"


function CounterCart({item}) {
    const [count, setCount] = useState(item.cantidad)
    
    const {getCant} = useContext(CounterContext)

    const rest = async () => {
        const resta = count - 1
        await updateDoc(doc(db, "cart", item.id), {
            cantidad: resta
        });
        setCount(resta)
    }

    const sum = async () => {
        const suma = count + 1
        await updateDoc(doc(db, "cart", item.id), {
            cantidad: suma
        });
        setCount(suma)
    }

    useEffect(() => {
        getCant()
    }, [count])
    

    return (
        <div className={styles.contenedor}>
            <div className={styles.contButon}>
                <button type='button' onClick={() => {if(count > 1){rest()}}}>-</button>
                    <p>{count}</p>
                <button type='button' onClick={() => sum()}>+</button>
            </div>
            <div>
                <p>${item.price * count}</p>
            </div>
        </div>
    )
}

export default CounterCart