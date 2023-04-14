import { doc, getDoc,} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../../../db/firebase-config';
import CountAdd from '../CountAdd'
import styles from "./itemDetail.module.css"

function ItemDetail() {
    const { id } = useParams()
    const [producto, setProducto] = useState({})

    const getProducto = async () => {
        const docRef = doc(db, "items", id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            setProducto(docSnap.data())
        }else{
            console.log("No such document!")
        } 
    }

    useEffect(() => {
      getProducto();
    }, [id]);
    
    return (
        <div className={styles.contenedor}>
            <div className={styles.contImg}>
                <img src={`.${producto.image}`} alt={producto.title} className={styles.imagen}/>
            </div>
            <div>
                <div className={styles.contProducto}>
                    <span className={styles.categoria}>{producto.category}</span>
                    <h1 className={styles.titulo}>{producto.title}</h1>
                    <div className={styles.contPrice}>
                        <p className={styles.price}>${producto.price}</p>
                        <p className={styles.price}> <span className={styles.rating}>Rating</span> {producto.rate}</p>
                    </div>
                </div>
                <div className={styles.contDescription}>
                    
                    <span className={styles.categoria}>description</span>
                    <p className={styles.description}><span className={styles.spanDescription}>Gender:</span> {producto.genre}</p>
                    <p className={styles.description}><span className={styles.spanDescription}>Brand:</span> {producto.brand}</p>
                    <p className={styles.description}><span className={styles.spanDescription}>Color:</span> {producto.color}</p>
                    <p className={styles.description}><span className={styles.spanDescription}>Discipline:</span> {producto.discipline}</p>
                </div>
                
                <CountAdd producto={producto}/> 
            </div>
        </div>
    )
}

export default ItemDetail