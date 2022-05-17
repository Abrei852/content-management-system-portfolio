import "./style.css";
import React from "react";

export default function OverlayContainer({ children }) {
    return <div className="overlay">{children}</div>;
}
