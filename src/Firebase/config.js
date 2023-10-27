import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, setDoc, deleteDoc, doc, query, where, serverTimestamp, onSnapshot, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from "firebase/storage";

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
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)
export { updateDoc, collection, addDoc, db, getDocs, serverTimestamp, deleteDoc, onAuthStateChanged, ref, auth, signOut, signInWithEmailAndPassword, uploadBytes, storage, getDownloadURL, uploadBytesResumable, setDoc, doc, query, where, onSnapshot, }