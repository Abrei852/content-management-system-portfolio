import React, { useState } from "react";
import Title from "components/Title";
import { Button, Form } from "react-bootstrap";

export default function PopupEdit({ close, object, editItemDb }) {
    const [formData, setFormData] = useState({
        id: object.id,
        title: object.val.title,
        specs: object.val.specs,
    });
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((v) => ({ ...v, [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault(event);
        editItemDb(formData);
        close();
    }
    return (
        <React.Fragment>
            <Title h4={"Edit"} cls="p-1 text-center" />
            <Form className="py-3 px-1 mt-3 border-top" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        required
                        placeholder="Edit the title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="specs"
                        required
                        placeholder="Edit the Description"
                        value={formData.specs}
                        onChange={handleChange}
                    />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicIcon">
                    <Form.Label>Icon name (FA)</Form.Label>
                    <Form.Control
                        type="text"
                        name="icon"
                        placeholder="Change icon"
                        value={formData.icon}
                        onChange={handleChange}
                    />
                </Form.Group> */}

                <div className="d-flex justify-content-between pt-3">
                    <Button
                        title="Submit"
                        variant="secondary"
                        className="expand-sm"
                        type="submit"
                    >
                        Submit
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
            </Form>
        </React.Fragment>
    );
}
