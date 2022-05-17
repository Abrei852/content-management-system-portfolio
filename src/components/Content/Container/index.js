import "./style.css";
import React, { useState, useEffect } from "react";
import ButtonCreate from "components/Button/Create";
import OverlayOption from "components/Overlay/Option";
import OverlayContainer from "components/Overlay/Container";
import PropTypes from "prop-types";
import Title from "components/Title/index";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { firebaseDb } from "db/firebase";
import { ref, onValue, remove, update, push } from "firebase/database";

export default function ContentContainer({
    children,
    loc,
    hTitle,
    clsContainer,
    clsCardContainer,
    clsCard,
}) {
    const [data, setData] = useState({ dbObjects: [] });
    const [object, setObject] = useState();
    useEffect(() => {
        const getFromRef = ref(firebaseDb, loc);
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
    }, [loc]);

    //Object
    function handleChange(event) {
        setObject((prevState) => ({
            ...prevState,
            [event.name]: event.value,
        }));
    }
    function onSubmit(event, id, close) {
        event.preventDefault(event);
        if (id && object) {
            const getFromRef = ref(firebaseDb, loc + id);
            update(getFromRef, object);
            setObject();
        }
        close();
    }
    function onDelete(id, close) {
        if (id) {
            const getFromRef = ref(firebaseDb, loc + id);
            remove(getFromRef).then(() => {
                const newData = data.dbObjects.filter((obj) => obj.id !== id);
                setData({ dbObjects: newData });
            });
        }
        close();
    }

    function createItemDb(data) {
        const getFromRef = ref(firebaseDb, loc);
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
                            <OverlayContainer>
                                <OverlayOption
                                    edit
                                    faIcon={faPen}
                                    faColor="#54a7f0"
                                    handleChange={handleChange}
                                    object={object}
                                    onSubmit={onSubmit}
                                />
                                <OverlayOption
                                    faIcon={faTrash}
                                    faColor="#f05e54"
                                    object={object}
                                    onDelete={onDelete}
                                />
                            </OverlayContainer>
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
    loc: PropTypes.string.isRequired,
};
