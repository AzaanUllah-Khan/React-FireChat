import React from "react";
import '../App.css'

export default function Message(props) {
    return (
        <div className={`message-container ${props.class}`}>
            <p>{props.text}</p>
            <small>10:56</small>
        </div>
    );
}
