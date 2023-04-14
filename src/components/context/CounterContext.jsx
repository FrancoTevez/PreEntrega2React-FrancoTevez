import { collection, deleteDoc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import db from "../../../db/firebase-config";


const CounterContext = createContext()

const CounterProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [cant, setCant] = useState(0)
    const [priceTotal, setPriceTotal] = useState(0)
    const [length, setLength] = useState(0)
    const itemRef = collection(db, "cart")

    const getCant = async () => {
        const itemsCollection = await getDocs(itemRef)
        const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
        setItems(items)
        const cantTotal = items.reduce((acc, el) => acc + el.cantidad, 0)
        const precioTotal = items.reduce((acc, el) => acc + Number(el.price) * el.cantidad, 0)
        setCant(cantTotal)
        setPriceTotal(precioTotal)
        setLength(items.length)
    }
    
    return (
        <CounterContext.Provider value={{cant, getCant ,length, priceTotal, items}}>
            {children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterProvider }