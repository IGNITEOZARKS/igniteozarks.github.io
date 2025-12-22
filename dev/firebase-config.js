// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Your web app's Firebase configuration (PASTE YOUR KEYS HERE)
const firebaseConfig = {
apiKey: "AIzaSyA8b5_WXml0DgF-09r1jyIlTbWrpqF0uXU",
  authDomain: "igniteozarks-web.firebaseapp.com",
  projectId: "igniteozarks-web",
  storageBucket: "igniteozarks-web.firebasestorage.app",
  messagingSenderId: "619963077572",
  appId: "1:619963077572:web:3c5d8837c12212dd0d8a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, doc, getDoc, updateDoc, signInWithEmailAndPassword, onAuthStateChanged, signOut };