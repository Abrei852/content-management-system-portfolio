import React from "react";
import ContentContainer from "components/ContentContainer/index";
import Header from "components/Header/index";
import { signOutUser } from "db/firebase";
import CardExpandable from "components/Card/Expandable";
import CardExpandableWithImage from "components/Card/ExpandableWithImage";

export default function Dashboard() {
    function signOut() {
        signOutUser();
    }

    return (
        <React.Fragment>
            <Header signOut={signOut} />
            <div className="d-flex justify-content-around">
                <ContentContainer
                    dbRef="workexp/"
                    hTitle="Work Experience"
                    clsContainer="cont-container-exp"
                    clsCard="card-exp"
                >
                    <CardExpandable />
                </ContentContainer>
                <ContentContainer
                    dbRef="eduexp/"
                    hTitle="Educational Experience"
                    clsContainer="cont-container-exp"
                    clsCard="card-exp"
                >
                    <CardExpandable />
                </ContentContainer>
            </div>
            <div className="">
                <ContentContainer
                    dbRef="projects/"
                    hTitle="Projects"
                    clsContainer="cont-container-cwi"
                    clsCardContainer="card-container"
                    clsCard="card-cwi"
                >
                    <CardExpandableWithImage />
                </ContentContainer>
            </div>
        </React.Fragment>
    );
}
