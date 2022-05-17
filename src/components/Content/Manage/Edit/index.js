import React from "react";
import PopupOption from "components/Popup/Option";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export default function ConentManageEdit({
    close,
    handleChange,
    object,
    onSubmit,
}) {
    return (
        <Form
            className="border-top"
            onSubmit={(e) => onSubmit(e, object.id, close)}
        >
            <div className="d-flex flex-wrap justify-content-between py-3">
                {Object.entries(object.val).map(([item, key], id) => (
                    <Form.Group className="mx-3 p-1" key={id}>
                        <Form.Label>{item}</Form.Label>
                        <Form.Control
                            type="text"
                            name={item}
                            placeholder={`Change ${item}`}
                            defaultValue={key}
                            onChange={(e) => handleChange(e.target)}
                        />
                    </Form.Group>
                ))}
            </div>
            <PopupOption
                btnTitle1="Submit"
                btnTitle2="Cancel"
                btnType1="submit"
                close={close}
            />
        </Form>
    );
}

ConentManageEdit.propTypes = {
    handleChange: PropTypes.func,
    onSubmit: PropTypes.func,
    object: PropTypes.object,
};
