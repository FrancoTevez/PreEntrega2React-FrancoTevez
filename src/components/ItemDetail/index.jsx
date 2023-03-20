import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CountAdd from '../CountAdd'
import styles from "./itemDetail.module.css"

function ItemDetail() {
    const { id } = useParams()
    const [producto, setProducto] = useState({})

    const getProducto = async () => {
        try{
            const response = await fetch("../productos.json")
            const json = await response.json()
            const producto = json.find(prod => prod.id == id) 
            setProducto(producto)
        }catch (err){
            console.log(err);
        }
        
       
    }

    useEffect(() => {
      getProducto();
    }, []);
    
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
                
                <CountAdd /> 
            </div>
        </div>
    )
}

export default ItemDetail