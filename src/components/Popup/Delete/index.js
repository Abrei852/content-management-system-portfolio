import React from "react";
import Title from "components/Title";
import { Button } from "react-bootstrap";

export default function PopupDelete({ object, deleteItemDb, close }) {
    const objectId = object.id;
    const objectTitle = object.val.title;
    return (
        <React.Fragment>
            <Title h4={"Delete"} cls="p-1 text-center" />
            <div className="text-center py-3 px-1 my-3 border-top border-bottom">
                Delete "<b>{objectTitle}</b>" permanently?
            </div>
            <div className="d-flex justify-content-between">
                <Button
                    title="Delete"
                    variant="secondary"
                    className="expand-sm"
                    onClick={() => {
                        deleteItemDb(objectId);
                        close();
                    }}
                >
                    Delete
                </Button>
                <Button
                    title="Cancel"
                    variant="secondary"
                    className="expand-sm"
                    onClick={() => close()}
                >
                    Cancel
                </Button>
            </div>
        </React.Fragment>
    );
}
