/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqH52jxLVd9xksh49VDz9MCtoCeZsf_1g",
  authDomain: "ecommerce-6289c.firebaseapp.com",
  projectId: "ecommerce-6289c",
  storageBucket: "ecommerce-6289c.firebasestorage.app",
  messagingSenderId: "813663337635",
  appId: "1:813663337635:web:77528ed601627f65db1316"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);