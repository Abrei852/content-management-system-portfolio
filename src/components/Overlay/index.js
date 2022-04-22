import "./style.css";
import React from 'react'

export default function Overlay(props) {
    return(
        <div className="overlay bg-light hide rounded m-1">
            {props.children}
        </div>
    )
}