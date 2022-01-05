import React from "react";
import OptionButton from "components/Button/Option";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverlayMenu(props) {
    return (
        <React.Fragment>
            <OptionButton editObject={props.object}>
                <FontAwesomeIcon icon={faPen} color="#023e9e" className="expand-sm"/>
            </OptionButton>
            <OptionButton removeObject={props.object}>
                <FontAwesomeIcon icon={faTrash} color="#a60303" className="expand-sm"/>
            </OptionButton>
        </React.Fragment>
    );
}
