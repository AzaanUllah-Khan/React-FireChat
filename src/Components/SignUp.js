import React from "react";
import '.././App.css'
import add from '../assets/download.png'
import Swal from 'sweetalert2';
import Navbar from "./Navbar";
import { createUserWithEmailAndPassword, doc, setDoc, db, auth, ref, uploadBytes, storage } from '../Firebase/config'

export default function SignUp() {
    function handleSignUp() {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const name = document.getElementById("name").value
        const country = document.getElementById("country").value
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "user", user.uid), {
                    name,
                    country,
                    email,
                    uid: user.uid
                });
                const storageRef = ref(storage, email);
                const file = document.getElementById("file").files[0]
                uploadBytes(storageRef, file).then((snapshot) => {
                    Swal.fire({
                        icon: "success"
                    })
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        title: 'User Created Successful.',
                    }).then(() => {
                    window.location.href = "./main";
                });
            })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: errorMessage,
                });
            });

    }
    return (
        <>
            <Navbar />
            <div className="body">
                <div className="form-outer">
                    <h1>Sign Up</h1>
                    <div className="form-inner">
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="input">
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" />
                        </div>
                        <label htmlFor="file" className="special">
                            <img src={add} alt="add your image here" width={60} />
                        </label>
                        <input type="file" name="file" id="file" style={{ display: "none" }} />
                    </div>
                    <button onClick={handleSignUp}>Register Now !</button>
                    <a href="/">Already Have An Account</a>
                </div>
            </div>
        </>
    )
}