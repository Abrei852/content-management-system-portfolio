import React from "react";
import ButtonClose from "../Close";
import PopupCreate from "components/Popup/Create";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonCreate({ h4, createItemDb, cls }) {
    return (
        <div className={`d-grid gap-2 expand-sm ${cls}`}>
            <Popup
                className="rounded"
                lockScroll
                trigger={
                    <Button variant="success" title={`New ${h4}`}>
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

ButtonCreate.propTypes = {
    h4: PropTypes.string.isRequired,
    createItemDb: PropTypes.func.isRequired,
};
