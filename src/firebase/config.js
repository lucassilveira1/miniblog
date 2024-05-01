import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmc7A1nrgiTMB4Y-Gu6OvDzHtXZGiXK44",
  authDomain: "miniblog-bb55e.firebaseapp.com",
  projectId: "miniblog-bb55e",
  storageBucket: "miniblog-bb55e.appspot.com",
  messagingSenderId: "164835477416",
  appId: "1:164835477416:web:295d853cc11ad806adff9d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
