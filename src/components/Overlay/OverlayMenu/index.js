import "./style.css";
import React from "react";
import OptionButton from "components/Button/Option-Button";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverlayMenu(params) {
    return (
        <div className="overlay bg-light hide rounded m-1">
            <OptionButton>
                <FontAwesomeIcon icon={faEdit} color="#023e9e" />
            </OptionButton>
            <OptionButton>
                <FontAwesomeIcon icon={faTrashAlt} color="#a60303" />
            </OptionButton>
        </div>
    );
}
