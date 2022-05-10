import "./style.css";
import React from "react";

export default function Expandable({ object }) {

    return (
        <div className="bg-ligh expandable-container">
            <div className="d-flex justify-content-between align-items-center m-8">
                <p>{object.val.overline}</p>
                <p>+</p>
            </div>
            <div className="d-flex justify-content-between m-8">
                <p>{object.val.title}</p>
                <p>{object.val.date}</p>
            </div>

            <div>{object.val.specs}</div>
        </div>
    );
}
