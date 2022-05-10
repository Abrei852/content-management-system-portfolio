import "./style.css";
import React from "react";

export default function Overlay(props) {
    return (
        <div className="overlay">
            {props.children}
        </div>
    );
}
