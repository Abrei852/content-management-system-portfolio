import React from "react";
import "./style.css";

export default function CardExpandableWithImage({ object }) {
    return (
        <div className="p-2">
            <img src={object.val.img} className="image" alt="project"/>
            <div className="d-flex">
                {object.val.langs ? (
                    object.val.langs.map((language, idx) => (
                        <div key={idx} className="mt-1 lang-container">
                            <p className="font-12 lang">{language}</p>
                        </div>
                    ))
                ) : (
                    <p></p>
                )}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <p>{object.val.name}</p>
                <p>+</p>
            </div>

            <div>{object.val.specs}</div>
        </div>
    );
}
