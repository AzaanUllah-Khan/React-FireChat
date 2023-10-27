import React from "react";
import '.././App.css'
import userImage from '../assets/azaan16.jpg'
import Message from "./Message";
import Navbar from "./Navbar";
import { collection, query, where, getDocs, onSnapshot, auth, db, onAuthStateChanged, addDoc, getDownloadURL, storage, ref } from '../Firebase/config'

export default function Container() {
    var username;
    var uid;
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            uid = user.uid;
            const q = query(collection(db, "user"), where("uid", "==", uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                document.getElementById("name").innerHTML = doc.data().name
                username = doc.data().name
            });
            getDownloadURL(ref(storage, user.email))
                .then((url) => {
                    document.getElementById("img").src = url
                })
                .catch((error) => {
                    alert("For some reasons user profile image cannot be shown")
                });

        }
        else {
            window.location.href = '/'
        }
    });
    async function send() {
        var text = document.getElementById("message").value
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                message: text,
                sender: username,
                id: uid,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="header">
                    <h1 id="name">Azaan Ullah Khan</h1>
                    <img src={userImage} alt="my image" id="img" />
                </div>
                <div className="msg-container">
                    <Message class="you" text="Dummy Message" />
                </div>
                <div className="input">
                    <input type="text" placeholder="You Message" id="message" />
                    <i class="fa-solid fa-paper-plane" onClick={send}></i>
                </div>
            </div>
        </>
    )
}