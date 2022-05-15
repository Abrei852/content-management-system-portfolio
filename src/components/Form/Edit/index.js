import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function FormEdit({ handleChange, onSubmit, object, close }) {
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
            <div className="d-flex justify-content-between pt-3 px-2">
                <Button
                    title="Submit"
                    variant="success"
                    className="expand-sm"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    title="Cancel"
                    variant="danger"
                    className="expand-sm"
                    onClick={() => close()}
                >
                    Cancel
                </Button>
            </div>
        </Form>
    );
}

FormEdit.propTypes = {
    handleChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    object: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired,
};
