import React, { useState } from "react";
import Title from "components/Title";
import { Button, Form } from "react-bootstrap";

export default function PopupCreate({ close, createItemDb }) {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        specs: "",
        overline: "",
        date: "",
    });
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((v) => ({ ...v, [name]: value }));
    }
    function handleSubmit(event) {
        event.preventDefault(event);
        createItemDb(formData);
        close();
    }

    return (
        <React.Fragment>
            <Title h4={"Create"} cls="p-1 text-center" />
            <Form className="py-3 px-1 mt-3 border-top" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name="title"
                        required
                        placeholder="Enter a Title"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name="specs"
                        required
                        placeholder="Enter a Description"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Overline</Form.Label>
                    <Form.Control
                        type="text"
                        name="overline"
                        required
                        placeholder="Enter an Overline"
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        type="text"
                        name="date"
                        required
                        placeholder="Enter a Date"
                        onChange={handleChange}
                    />
                </Form.Group>

                <div className="d-flex justify-content-between pt-3">
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
        </React.Fragment>
    );
}
