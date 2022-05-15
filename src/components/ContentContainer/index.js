import "./style.css";
import React, { useState, useEffect } from "react";
import ButtonCreate from "components/Button/Create";
import ButtonOption from "components/Button/Option";
import Overlay from "components/Overlay";
import PropTypes from "prop-types";
import Title from "components/Title/index";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { firebaseDb } from "db/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, onValue, remove, update, push } from "firebase/database";

export default function ContentContainer({
    children,
    dbRef,
    hTitle,
    clsContainer,
    clsCardContainer,
    clsCard,
}) {
    const [data, setData] = useState({ dbObjects: [] });
    const [object, setObject] = useState();

    useEffect(() => {
        const getFromRef = ref(firebaseDb, dbRef);
        onValue(getFromRef, (snapshot) => {
            const dbData = [];
            snapshot.forEach((childSnapshot) => {
                dbData.push({
                    id: childSnapshot.key,
                    val: childSnapshot.val(),
                });
            });
            setData({ dbObjects: dbData });
        });
    }, [dbRef]);

    //Object
    function handleChange(event) {
        setObject((prevState) => ({
            ...prevState,
            [event.name]: event.value,
        }));
    }
    function onSubmit(event, id, close) {
        event.preventDefault(event);
        editItemDb(id, object);
        close();
    }

    //Db
    function deleteItemDb(id) {
        const getFromRef = ref(firebaseDb, dbRef + id);
        remove(getFromRef).then(() => {
            const newData = data.dbObjects.filter((obj) => obj.id !== id);
            setData({ dbObjects: newData });
        });
    }

    function editItemDb(id, object) {
        const getFromRef = ref(firebaseDb, dbRef + id);
        update(getFromRef, object);
    }

    function createItemDb(data) {
        const getFromRef = ref(firebaseDb, dbRef);
        push(getFromRef, {
            title: data.title,
            specs: data.specs,
            overline: data.overline,
            date: data.date,
        });
    }

    return (
        <div className={clsContainer}>
            <div className="card-top bg-dark">
                <Title h4={hTitle} cls="text-size-medium" />
                <ButtonCreate
                    h4={hTitle}
                    createItemDb={createItemDb}
                    cls="btn-create"
                />
            </div>
            <div className={clsCardContainer}>
                {data.dbObjects.length > 0 ? (
                    data.dbObjects.map((object) => (
                        <div
                            className={`expand-sm card ${clsCard}`}
                            key={object.id}
                        >
                            <Overlay>
                                <ButtonOption
                                    object={object}
                                    handleChange={handleChange}
                                    onSubmit={onSubmit}
                                    edit
                                >
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        color="#54a7f0"
                                    />
                                </ButtonOption>
                                <ButtonOption
                                    object={object}
                                    deleteItemDb={deleteItemDb}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        color="#f05e54"
                                    />
                                </ButtonOption>
                            </Overlay>
                            {React.cloneElement(children, {
                                object: object,
                            })}
                        </div>
                    ))
                ) : (
                    <p>loading..</p>
                )}
            </div>
        </div>
    );
}

ContentContainer.propTypes = {
    dbRef: PropTypes.string.isRequired,
};
