import "./style.css";
import "reactjs-popup/dist/index.css";
import React from "react";
import ButtonClose from "components/Button/Close";
import Popup from "reactjs-popup";
import PopupContent from "components/Popup/Content";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OverlayOption({
    edit,
    faIcon,
    faColor,
    handleChange,
    object,
    onDelete,
    onSubmit,
}) {
    return (
        <div className="button-option-container">
            <Popup
                className="rounded"
                lockScroll
                trigger={
                    <Button
                        title={edit ? "Edit" : "Delete"}
                        className="button-option opt-b btn-bg-transparent expand-sm-icon"
                    >
                        <FontAwesomeIcon icon={faIcon} color={faColor} />
                    </Button>
                }
                position="left center"
                modal
                closeOnDocumentClick={false}
            >
                {(close) => (
                    <div className="p-2">
                        <ButtonClose close={close} />
                        <PopupContent
                            close={close}
                            edit={edit}
                            handleChange={handleChange}
                            object={object}
                            onDelete={onDelete}
                            onSubmit={onSubmit}
                        />
                    </div>
                )}
            </Popup>
        </div>
    );
}

OverlayOption.propTypes = {
    faColor: PropTypes.string,
    edit: PropTypes.bool,
    handleChange: PropTypes.func,
    object: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
};
