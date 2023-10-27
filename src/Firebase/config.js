import { initializeApp } from "firebase/app";
import firebase from 'firebase'

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
const auth = getAuth();

export {db,auth}