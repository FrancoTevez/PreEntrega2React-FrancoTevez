import db from "./firebase-config.js";
import productos from "../productos.js";
import { addDoc, collection } from "firebase/firestore";

const itemsCollectionRef = collection(db, "items")

const promises = productos.map((producto) => addDoc(itemsCollectionRef, producto))

Promise.all(promises).then(() => {
    process.exit(0)
})