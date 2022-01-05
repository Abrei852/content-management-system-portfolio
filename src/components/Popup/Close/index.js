import React from "react";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CloseButton({ close }) {
    return (
        <React.Fragment>
            <button onClick={close}>
                <FontAwesomeIcon icon={faWindowClose} />
            </button>
        </React.Fragment>
    );
}
