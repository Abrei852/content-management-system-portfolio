import React from "react";
import ContentContainer from "components/ContentContainer/index";
import Header from "components/Header/index";
import { signOutUser } from "db/firebase";
import CardExpandable from "components/Card/Expandable";

export default function Dashboard() {
    function signOut() {
        signOutUser();
    }

    return (
        <React.Fragment>
            <Header signOut={signOut} />
            <div className="d-flex justify-content-around">
                <ContentContainer dbRef="workexp/" hTitle="Work Experience">
                        <CardExpandable />
                </ContentContainer>
                <ContentContainer
                    dbRef="eduexp/"
                    hTitle="Educational Experience"
                >
                    <CardExpandable />
                </ContentContainer>
            </div>
        </React.Fragment>
    );
}
