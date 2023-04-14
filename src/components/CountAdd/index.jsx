import React, { useContext, useState } from 'react'
import styles from "./countAdd.module.css"
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import db from '../../../db/firebase-config';
import { CounterContext } from '../context/CounterContext';

function CountAdd({producto}) {
    const [count, setCount] = useState(0)
    const itemRef = collection(db, "cart")
    const {getCant} = useContext(CounterContext)
 
    const getItems = async () => {
        const itemsCollection = await getDocs(itemRef)
        const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        return items
    }
    
    const addItem = async () => {
        const items = await getItems()
        const item = {price: `${producto.price}`, title: `${producto.title}`, image: `${producto.image}`, cantidad: count}
        const repetido = items.find(prod => prod.title == item.title)
        if(repetido){
            repetido.cantidad += item.cantidad
            await updateDoc(doc(db, "cart", repetido.id), {
                cantidad: repetido.cantidad
            });
        }else{
            addDoc(itemRef, item)
        }
        getCant()
    }
    
    return (
        <div className={styles.main}>
            <div className={styles.contenedor}>
                <button type='button' onClick={() => {if(count > 0){setCount(count - 1)}}} className={styles.button}>-</button>
                <p>{count}</p>
                <button type='button' onClick={() => setCount(count + 1)} className={styles.button}>+</button>
            </div>
            <button type='button' className={styles.add} onClick={() => {
                if(count > 0){
                    addItem()
                    setCount(0)
                }
            }}>Agregar al Carrito</button>
        </div> 
    )
}

export default CountAdd