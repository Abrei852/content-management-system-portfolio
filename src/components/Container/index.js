import "./style.css";
import React, { useState, useEffect } from "react";
import OverlayMenu from "components/Overlay/OverlayMenu";
import PropTypes from "prop-types";
import Title from "components/Title/index";
import { firebaseDb } from "db/firebase";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, onValue } from "firebase/database";
import { Row, Col, Card } from "react-bootstrap";

function Container({ dbRef }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const test = [];
        const getFromRef = ref(firebaseDb, dbRef);
        onValue(getFromRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                test.push({ id: childSnapshot.key, val: childSnapshot.val() });
            });
            setData(test);
        });
    }, [dbRef]);

    return (
        <div className=" bg-light">
            <Title h4="My Experience" cls="p-sm-3 p-md-4" />
            <Row xs={1} sm={2} md={3} lg={4} className="p-md-2">
                {data.map((object) => (
                    <Col key={object.id}>
                        <Card id={object.val.id} className="py-3 py-sm-4 p-md-5">
                            <OverlayMenu deleteObject={object} />
                            <FontAwesomeIcon
                                icon={faDatabase}
                                className="mx-auto"
                                size={"3x"}
                            />
                            <Card.Body className="pointer">
                                <Card.Title>{object.val.title}</Card.Title>
                                <Card.Text>{object.specs}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

Container.prototype = {
    dbRef: PropTypes.element.isRequired,
};

export default Container;
