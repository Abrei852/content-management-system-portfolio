import "./style.css";
import "reactjs-popup/dist/index.css";
import React from "react";
import CloseButton from "components/Popup/Close";
import Popup from "reactjs-popup";
import PopupDelete from "components/Popup/Delete";
import PopupEdit from "components/Popup/Edit";
import { Button } from "react-bootstrap";

export default function OptionButton({
    children,
    editObject,
    removeObject,
    deleteObject,
    updateObject,
}) {
    return (
        <React.Fragment>
            <Popup
                className="rounded"
                trigger={
                    <Button
                        title={editObject ? "Edit" : "Delete"}
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
                    <div className="p-1 rounded">
                        <CloseButton close={close} />
                        {editObject ? (
                            <PopupEdit
                                close={close}
                                object={editObject}
                                updateObject={updateObject}
                            />
                        ) : (
                            <PopupDelete
                                close={close}
                                object={removeObject}
                                deleteObject={deleteObject}
                            />
                        )}
                    </div>
                )}
            </Popup>
        </React.Fragment>
    );
}
