import "./style.css";
import "reactjs-popup/dist/index.css";
import React from "react";
import ButtonClose from "components/Button/Close";
import Popup from "reactjs-popup";
import PopupDelete from "components/Popup/Delete";
import PopupEdit from "components/Popup/Edit";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function ButtonOption({
    children,
    edit,
    object,
    deleteItemDb,
    editItemDb,
}) {
    return (
        <React.Fragment>
            <Popup
                className="rounded"
                trigger={
                    <Button
                        title={edit ? "Edit" : "Delete"}
                        className="opt-b btn-bg-transparent expand-sm-icon"
                    >
                        {children}
                    </Button>
                }
                position="left center"
                modal
                closeOnDocumentClick={false}
            >
                {(close) => (
                    <div className="p-1">
                        <ButtonClose close={close} />
                        {edit ? (
                            <PopupEdit
                                close={close}
                                object={object}
                                editItemDb={editItemDb}
                            />
                        ) : (
                            <PopupDelete
                                close={close}
                                object={object}
                                deleteItemDb={deleteItemDb}
                            />
                        )}
                    </div>
                )}
            </Popup>
        </React.Fragment>
    );
}

ButtonOption.propTypes = {
    edit: PropTypes.bool
};
