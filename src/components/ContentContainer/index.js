import "./style.css";
import React, { useState, useEffect } from "react";
import Overlay from "components/Overlay";
import Option from "components/Button/Option";
import PropTypes from "prop-types";
import Title from "components/Title/index";
import { firebaseDb } from "db/firebase";
import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ref, onValue, remove, update, set, push } from "firebase/database";
import CreateButton from "components/Button/Create";

export default function ContentContainer(props) {
    const [data, setData] = useState({ dbObjects: [] });
    useEffect(() => {
        const getFromRef = ref(firebaseDb, props.dbRef);
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
    }, [props.dbRef]);

    function deleteItemDb(id) {
        const getFromRef = ref(firebaseDb, props.dbRef + id);
        remove(getFromRef).then(() => {
            const newData = data.dbObjects.filter((obj) => obj.id !== id);
            setData({ dbObjects: newData });
        });
    }

    function editItemDb(data) {
        const getFromRef = ref(firebaseDb, props.dbRef + data.id);
        update(getFromRef, {
            title: data.title,
            specs: data.specs,
            overline: data.overline,
            date: data.date,
        });
    }

    function createItemDb(data) {
        const getFromRef = ref(firebaseDb, props.dbRef);
        push(getFromRef, {
            title: data.title,
            specs: data.specs,
            overline: data.overline,
            date: data.date,
        });
    }

    return (
        <div className="cont-container">
            <Title h4={props.hTitle} cls="p-3 p-sm-3 p-md-4" />
            <CreateButton createItemDb={createItemDb}/>
            {data.dbObjects.length > 0 ? (
                data.dbObjects.map((object) => (
                    <div className="card" key={object.id}>
                        <Overlay>
                            <Option
                                object={object}
                                editItemDb={editItemDb}
                                edit
                            >
                                <FontAwesomeIcon icon={faPen} color="#023e9e" />
                            </Option>
                            <Option object={object} deleteItemDb={deleteItemDb}>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    color="#a60303"
                                />
                            </Option>
                        </Overlay>
                        {React.cloneElement(props.children, {
                            object: object,
                        })}
                    </div>
                ))
            ) : (
                <p>loading..</p>
            )}
        </div>
    );
}

ContentContainer.propTypes = {
    dbRef: PropTypes.string.isRequired,
};
