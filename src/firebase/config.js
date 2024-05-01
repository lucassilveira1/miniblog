import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiB6YVEai7RUBJHWgYwD-bVrn2ZJsphNc",
  authDomain: "miniblog3-d850c.firebaseapp.com",
  projectId: "miniblog3-d850c",
  storageBucket: "miniblog3-d850c.appspot.com",
  messagingSenderId: "817154003969",
  appId: "1:817154003969:web:97f95a1bd88d0b283f9c00",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
