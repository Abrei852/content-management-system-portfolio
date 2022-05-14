import React, { useState } from "react";
import Title from "components/Title";
import { Button, Form } from "react-bootstrap";

export default function PopupEdit({ close, object, editItemDb }) {
    const [formData, setFormData] = useState({
        id: object.id,
        title: object.val.title,
        specs: object.val.specs,
        overline: object.val.overline,
        date: object.val.date,
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
                <div className="d-flex">
                    <Form.Group className="mb-3 px-2">
                        <Form.Group className="mb-3">
                            <Form.Label>Overline</Form.Label>
                            <Form.Control
                                type="text"
                                name="overline"
                                required
                                placeholder="Edit the Overline"
                                value={formData.overline}
                                onChange={handleChange}
                            />
                        </Form.Group>
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

                    <Form.Group className="mb-3 px-2">
                        <Form.Group className="mb-3">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="text"
                                name="date"
                                required
                                placeholder="Edit the Date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </Form.Group>
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
                </div>

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
        </React.Fragment>
    );
}
