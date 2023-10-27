import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1nq-jehldr_u_cGAIxzwAA5qB2pUqJlU",
  authDomain: "chat-app-df35e.firebaseapp.com",
  projectId: "chat-app-df35e",
  storageBucket: "chat-app-df35e.appspot.com",
  messagingSenderId: "129501663276",
  appId: "1:129501663276:web:252b10b6ccf56b45514189",
  measurementId: "G-VW4RRZR2M0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage();
export { signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, auth, doc, setDoc, db, signOut, getStorage, ref, uploadBytes, storage, collection, query, where, getDocs, onAuthStateChanged, getDownloadURL }