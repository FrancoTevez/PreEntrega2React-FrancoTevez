import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnG4Mzb1Sag1QEVzAG-8m3NMMIJETGlzk",
  authDomain: "moduzzz.firebaseapp.com",
  projectId: "moduzzz",
  storageBucket: "moduzzz.appspot.com",
  messagingSenderId: "672262037925",
  appId: "1:672262037925:web:73948e228d92720a43084c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db

