import React from "react";
import '.././App.css'
import { auth,signOut } from "../Firebase/config";
import Swal from "sweetalert2";

export default function Navbar() {
    function out() {
        signOut(auth).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'User SignedOut Successful.',
            }).then(() => {
                window.location.href = "/";
            });
          }).catch((error) => {
            Swal.fire({
                icon: "error",
                title: "An Error Occured While Signing Out",
                text: error
            })
          });
          
    }
    return (
        <>
            <nav className="nav-wrap">
                <h1>FireChat 🔥</h1>
                <button onClick={out}>SignOut</button>
            </nav>
        </>
    )
}