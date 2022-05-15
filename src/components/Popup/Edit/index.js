import React from "react";
import Title from "components/Title";
import PropTypes from "prop-types";

export default function PopupEdit({
    children,
    handleChange,
    onSubmit,
    object,
    close,
}) {
    return (
        <React.Fragment>
            <Title h4={"Edit"} cls="p-1 text-center" />
            {React.cloneElement(children, {
                handleChange: handleChange,
                onSubmit: onSubmit,
                object: object,
                close: close,
            })}
        </React.Fragment>
    );
}

PopupEdit.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};
