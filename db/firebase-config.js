import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWY1Nd-SEew2mS6YJ5UQCyd39ZGKR4R0Y",
  authDomain: "moduzzzz.firebaseapp.com",
  projectId: "moduzzzz",
  storageBucket: "moduzzzz.appspot.com",
  messagingSenderId: "653428399381",
  appId: "1:653428399381:web:3a304cd80d11517b151d1c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db