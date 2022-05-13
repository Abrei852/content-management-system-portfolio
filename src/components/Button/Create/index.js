import React from "react";
import PopupCreate from "components/Popup/Create";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonClose from "../Close";

export default function ButtonCreate({ createItemDb }) {
    return (
        <div className="d-grid gap-2 expand-sm">
            <Popup
                className="rounded"
                trigger={
                    <Button variant="dark">
                        <FontAwesomeIcon icon={faPlus} color="white" />
                    </Button>
                }
                position="left center"
                modal
                closeOnDocumentClick={false}
            >
                {(close) => (
                    <div className="p-2">
                        <ButtonClose close={close} />
                        <PopupCreate
                            close={close}
                            createItemDb={createItemDb}
                        />
                    </div>
                )}
            </Popup>
        </div>
    );
}
