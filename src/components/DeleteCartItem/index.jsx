import React, { useContext, useEffect } from 'react'
import db from '../../../db/firebase-config'
import { deleteDoc, doc } from 'firebase/firestore'
import { CounterContext } from '../context/CounterContext'

function DeleteCartItem({item}) {
    const {getCant, items} = useContext(CounterContext)

    const deleteItem = () => {
        const docRef = doc(db, "cart", item.id)
        deleteDoc(docRef)
        getCant()
    }

    useEffect(() => {
      getCant()
    }, [items])
    

    return (
        <div>
            <button type='button' onClick={deleteItem}>X</button>
        </div>
    )
}

export default DeleteCartItem