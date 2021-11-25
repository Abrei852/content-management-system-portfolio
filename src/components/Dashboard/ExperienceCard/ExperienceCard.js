import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ref, onValue } from "firebase/database";
import { Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function ExperienceCard({ db, dbRef, cNameBg }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchDbData = () => {
            const getFromRef = ref(db, dbRef);
            onValue(getFromRef, (snapshot) => {
                console.log(snapshot.val());
                setData(snapshot.val());
            });
        };
        fetchDbData();
        return function cleanup() {
            setData([]);
        };
    }, [db, dbRef]);

    return (
        <div className=" bg-light">
            {/* <Container>
                <Row>
                    <Col xs="11">
                    </Col>
                    <Col xs="1" className="m-md-auto">
                        <button>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </Col>
                </Row>
            </Container> */}
            <Row
                xs={1}
                md={3}
                lg={4}
                className={`g-4 py-md-5 px-md-2 ${cNameBg}`}
            >
                {data.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    data.map((object) => (
                        <Col key={object.id}>
                            <Card id={object.id} className="p-md-5">
                                <FontAwesomeIcon
                                    icon={faDatabase}
                                    className="mx-auto"
                                    size={"3x"}
                                />
                                <Card.Body>
                                    <Card.Title>{object.title}</Card.Title>
                                    <Card.Text>{object.specs}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </div>
    );
}

ExperienceCard.prototype = {
    dbRef: PropTypes.element.isRequired,
};

export default ExperienceCard;
