import React from "react";
import Header from "components/Header/index";
import { firebaseDb } from "db/firebase";
import Container from "components/Container/index";
import { signOutUser } from "db/firebase";

export default function Dashboard() {
    function signOut() {
        signOutUser();
    }

    return (
        <div>
            <Header signOut={signOut} />
            <Container db={firebaseDb} dbRef="myexp" cNameBg="bg-light" />
        </div>
    );
}
