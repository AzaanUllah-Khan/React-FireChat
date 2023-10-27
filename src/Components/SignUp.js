import React from "react";
import '.././App.css'
import Navbar from "./Navbar";

export default function SignUp() {
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
                    </div>
                    <button>Register Now !</button>
                </div>
            </div>
        </>
    )
}