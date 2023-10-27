import React from "react";
import '.././App.css'
import userImage from '../assets/azaan16.jpg'
import Message from "./Message";
import Navbar from "./Navbar";
import { collection, query, where, getDocs, auth, db, onAuthStateChanged, getDownloadURL, storage, ref } from '../Firebase/config'

export default function Container() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            const q = query(collection(db, "user"), where("uid", "==", uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                document.getElementById("name").innerHTML = doc.data().name
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
                    <input type="text" placeholder="You Message" />
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </>
    )
}