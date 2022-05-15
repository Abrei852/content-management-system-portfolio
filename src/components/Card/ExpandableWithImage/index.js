import React, { useState } from "react";
import "./style.css";

export default function CardExpandableWithImage({ object }) {
    return (
        <div className="p-2">
            <img id="myimg" src={object.val.img} className="image" />
            <div className="d-flex justify-content-between align-items-center m-8">
                <p>{object.val.name}</p>
                <p>+</p>
            </div>
        </div>
    );
}
