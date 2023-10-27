import React from "react";
import '.././App.css'
import Navbar from "./Navbar";

export default function SignIn() {
    return (
        <>
            <Navbar />
            <div className="body">
                <div className="form-outer ">
                    <h1>Sign In</h1>
                    <div className="form-inner">
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>
                    <button>Log In</button>
                </div>
            </div>
        </>
    )
}