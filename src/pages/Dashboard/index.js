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
        <React.Fragment>
            <Header signOut={signOut} />
            <div className="d-flex justify-content-around">
                <ContentContainer dbRef="workexp/" hTitle="Work Experience">
                        <Expandable />
                </ContentContainer>
                <ContentContainer
                    dbRef="eduexp/"
                    hTitle="Educational Experience"
                >
                    <Expandable />
                </ContentContainer>
            </div>
        </React.Fragment>
    );
}
