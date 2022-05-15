import "./style.css";
import "reactjs-popup/dist/index.css";
import React from "react";
import ButtonClose from "components/Button/Close";
import FormEdit from "components/Form/Edit";
import Popup from "reactjs-popup";
import PopupDelete from "components/Popup/Delete";
import PopupEdit from "components/Popup/Edit";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function ButtonOption({
    children,
    edit,
    handleChange,
    onSubmit,
    object,
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
                        {children}
                    </Button>
                }
                position="left center"
                modal
                closeOnDocumentClick={false}
            >
                {(close) => (
                    <div className="p-2">
                        <ButtonClose close={close} />
                        {edit ? (
                            <PopupEdit
                                close={close}
                                object={object}
                                handleChange={handleChange}
                                onSubmit={onSubmit}
                            >
                                <FormEdit />
                            </PopupEdit>
                        ) : (
                            <PopupDelete close={close} object={object} />
                        )}
                    </div>
                )}
            </Popup>
        </div>
    );
}

ButtonOption.propTypes = {
    edit: PropTypes.bool,
};
