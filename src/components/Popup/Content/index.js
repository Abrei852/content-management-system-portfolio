import React from "react";
import ConentManageEdit from "components/Content/Manage/Edit";
import ContentManageDelete from "components/Content/Manage/Delete";
import PropTypes from "prop-types";
import Title from "components/Title";

export default function PopupContent({
    close,
    edit,
    handleChange,
    object,
    onDelete,
    onSubmit,
}) {
    return (
        <React.Fragment>
            <Title h4={edit ? "Edit" : "Delete"} cls="p-1 text-center" />
            {edit ? (
                <ConentManageEdit
                    handleChange={handleChange}
                    object={object}
                    onSubmit={onSubmit}
                    close={close}
                />
            ) : (
                <ContentManageDelete
                    close={close}
                    object={object}
                    onDelete={onDelete}
                />
            )}
        </React.Fragment>
    );
}

PopupContent.propTypes = {
    close: PropTypes.func.isRequired,
    edit: PropTypes.bool,
    handleChange: PropTypes.func,
    object: PropTypes.object.isRequired,
    onSubmit: PropTypes.func,
    onDelete: PropTypes.func,
};
