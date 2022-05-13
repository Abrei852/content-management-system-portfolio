import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonClose({ close }) {
    return (
        <React.Fragment>
            <button className="close rounded-circle" onClick={close}>
                <FontAwesomeIcon icon={faTimes} color="darkRed"/>
            </button>
        </React.Fragment>
    );
}
