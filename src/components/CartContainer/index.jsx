import React, { useContext, useEffect } from 'react'
import CartItems from '../CartItems';
import styles from "./cartContainer.module.css"
import { CounterContext } from '../context/CounterContext';
import CartResume from '../CartResume';
import { Link } from 'react-router-dom';

function CartContainer() {
    const {cant, items, getCant} = useContext(CounterContext)

    useEffect(() => {
      getCant()
    }, [])
    
  return (
    <main className={styles.contenedor}>
        <h1>CART</h1>
        {items.length < 1 ? (
          <div className={styles.contSinProd}>
            <p className={styles.pItems}>¡No tenés ningún producto en el carrito!</p>
            <Link to="/">
              <p className={styles.pSeguir}>Ver Productos</p>
            </Link>
          </div>
        ) : (
          <div className={styles.contSections}>
            <section>
              <div className={styles.contDatos}>
                <span className={styles.spanProd}>PRODUCTO</span>
                <div className={styles.contCant}>
                  <span>{cant} PARES</span>
                  <span>SUBTOTAL</span>
                </div>
              </div>
              {items.map(item => (
                  <CartItems key={item.id} item={item}/>
              ))}
            </section>
            <CartResume />
          </div>
        )}
    </main>
  )
}

export default CartContainer