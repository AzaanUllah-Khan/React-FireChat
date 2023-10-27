import React from "react";
import '.././App.css'
import userImage from '../assets/azaan16.jpg'
import Message from "./Message";
import Navbar from "./Navbar";

export default function Container() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="header">
                    <h1>Azaan Ullah Khan</h1>
                    <img src={userImage} alt="my image" />
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