import React from "react";
import Title from "components/Title";
import { Button } from "react-bootstrap";

export default function PopupDelete({ object, deleteObject, close }) {
    const objectId = object.id;
    const objectTitle = object.val.title;
    return (
        <React.Fragment>
            <Title h4={"Delete"} cls="p-1 text-center" />
            <div className="text-center py-3 px-1 my-3 border-top border-bottom">
                You are about to delete the card "<b>{objectTitle}</b>", this
                action can't be undone. <br />
                Are you sure?
            </div>
            <div className="d-flex justify-content-between">
                <Button
                    title="Delete"
                    className="bg-secondary border-secondary expand-sm"
                    onClick={() => {
                        deleteObject(objectId);
                        close();
                    }}
                >
                    Delete
                </Button>
                <Button
                    title="Cancel"
                    className="bg-secondary border-secondary expand-sm"
                    onClick={() => close()}
                >
                    Cancel
                </Button>
            </div>
        </React.Fragment>
    );
}
