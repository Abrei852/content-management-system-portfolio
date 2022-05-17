import React from "react";
import PopupOption from "components/Popup/Option";

export default function ContentManageDelete({ close, object, onDelete }) {
    return (
        <React.Fragment>
            <div className="text-center p-3 my-3 border-top border-bottom">
                Delete "<b>{object.val.title}</b>" permanently?
            </div>
            <PopupOption
                btnClick={() => onDelete(object.id, close)}
                btnTitle1="Delete"
                btnTitle2="Cancel"
                btnType1="button"
                close={close}
            />
        </React.Fragment>
    );
}
