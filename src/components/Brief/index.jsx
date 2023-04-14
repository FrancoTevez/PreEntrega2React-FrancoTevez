import React, { useContext, useEffect, useState } from 'react'
import styles from "./brief.module.css"
import { CounterContext } from '../context/CounterContext'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import db from '../../../db/firebase-config'
import CircularIndeterminate from '../CircularIndeterminate'

function Brief() {
  const {items, getCant} = useContext(CounterContext)
  const itemRef = collection(db, "orders")
  const [falso, setFalso] = useState(true)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [confEmail, setConfEmail] = useState("")
  const [orderNum, setOrderNum] = useState(0)
  const [orderId, setOrderId] = useState("")
  const [load, setLoad] = useState(false)
  const [renderOrder, setRenderOrder] = useState(false)
  const getItems = async () => {
    const itemsCollection = await getDocs(itemRef)
    const items = itemsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return items
  }

  const verifyEmail = () => {
    if(name != "" && lastName != "" && email != "" && confEmail != ""){
      if(email.includes("@") && email == confEmail){
        setFalso(false)
      }else{
        setFalso(true)
      }
    }else{
      setFalso(true)
    }
  }

  useEffect(() => {
    verifyEmail()
    
  }, [email, confEmail, name, lastName])

  const deleteCartItems = async (item) => {
    await deleteDoc(doc(db, "cart", item.id));
  }

  const feedback = async () => {
    const itemss = await getItems()
    const orden = itemss.find(el => el.order == orderNum)
    setOrderId(orden.id)
    setTimeout(() => {
      setLoad(false)
      setRenderOrder(true)
      setTimeout(() => {
        setRenderOrder(false)
      }, 30000);
    }, 1000);
    {items.forEach(item => {
      deleteCartItems(item)
    })}
     getCant()
     setName("")
     setLastName("")
     setEmail("")
     setConfEmail("")
  }

  const addOrder = async () => {
    const itemss = await getItems()
    const date = new Date().toLocaleString()
    const numOrder = itemss.length + 1
    setOrderNum(numOrder) 
    const prod = [items.map(el => {
      return `${el.title} X ${el.cantidad}`
    })].join("")
    console.log(prod);
    const order = {fecha: date, order: orderNum, productos: prod, nombre: name, apellido: lastName, email: email}
    addDoc(itemRef, order)
    setLoad(true)
    feedback()
  }

  return (
    <div>
        <form className={styles.form}>
            <input type="text" placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Apellido' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="email" placeholder='Confirma tu Email' value={confEmail} onChange={(e) => setConfEmail(e.target.value)}/>
            {falso && <span className={styles.spanEmail}>*Los Emails deben ser válidos e iguales o falta rellenar algún campo</span>}
            {load && <CircularIndeterminate />}
            {renderOrder && <p className={styles.spanLoad}>{`*Compra Realizada con Éxito. Número de compra; ${orderNum} ID; ${orderId}`}</p>}
            {falso ? <button type='submit' className={styles.buttonCompraDisabled} disabled>Realizar Compra</button> : <button type='submit' className={styles.buttonCompra} onClick={(e) => {
              e.preventDefault()
              if(items.length != 0){
                addOrder()
              }
            }}>Realizar Compra</button>}
        </form>
    </div>
  )
}

export default Brief