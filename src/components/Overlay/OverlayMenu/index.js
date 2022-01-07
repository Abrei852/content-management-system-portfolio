import React from "react";
import OptionButton from "components/Button/OptionOverlay";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverlayMenu({ object, deleteObject, updateObject }) {
    return (
        <React.Fragment>
            <OptionButton editObject={object} updateObject={updateObject}>
                <FontAwesomeIcon icon={faPen} color="#023e9e" />
            </OptionButton>
            <OptionButton removeObject={object} deleteObject={deleteObject}>
                <FontAwesomeIcon icon={faTrash} color="#a60303" />
            </OptionButton>
        </React.Fragment>
    );
}
