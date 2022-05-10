import React from "react";
import ContentContainer from "components/ContentContainer/index";
import Header from "components/Header/index";
import { signOutUser } from "db/firebase";
import Expandable from "components/Expandable";

export default function Dashboard() {
    function signOut() {
        signOutUser();
    }

    return (
        <div>
            <Header signOut={signOut} />
            <ContentContainer dbRef="workexp/" hTitle="Work Experience">
                <Expandable/>
            </ContentContainer>
            {/* <ContentContainer dbRef="workexp/" hTitle="Work Experience"/> */}
        </div>
    );
}
