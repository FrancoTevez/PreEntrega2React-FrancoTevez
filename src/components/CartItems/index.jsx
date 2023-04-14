import React from 'react'
import styles from "./cartItems.module.css"
import CounterCart from '../CounterCart'
import DeleteCartItem from '../DeleteCartItem'

function CartItems({item}) {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contTitle}>
          <img src={`.${item.image}`} alt={item.title} className={styles.imgCart}/>
          <h2>{item.title}</h2>
      </div>
      <div className={styles.contDatos}>
        <CounterCart item={item}/>
        <DeleteCartItem item={item}/>
      </div>
    </div>
  )
}

export default CartItems