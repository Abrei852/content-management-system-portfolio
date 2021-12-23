import React from "react";
import Header from "components/Dashboard/Header/Header.js";
import Container from "components/Dashboard/Container/Container";

export default function Dashboard({ db, setToken }) {
    return (
        <div>
            <Header setToken={setToken} />
            <Container db={db} dbRef="myexp" cNameBg="bg-light" />
        </div>
    );
}
