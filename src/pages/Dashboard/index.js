import React from "react";
import CardExpandableWithImage from "components/Card/ExpandableWithImage";
import CardExpandable from "components/Card/Expandable";
import ContentContainer from "components/Content/index";
import Header from "components/Header/index";
import { signOutUser } from "db/firebase";

export default function Dashboard() {
    function signOut() {
        signOutUser();
    }

    return (
        <React.Fragment>
            <Header signOut={signOut} />
            <div className="d-flex justify-content-around">
                <ContentContainer
                    loc="workexp/"
                    hTitle="Work Experience"
                    clsContainer="cont-container-exp"
                    clsCard="card-exp"
                >
                    <CardExpandable />
                </ContentContainer>
                <ContentContainer
                    loc="eduexp/"
                    hTitle="Educational Experience"
                    clsContainer="cont-container-exp"
                    clsCard="card-exp"
                >
                    <CardExpandable />
                </ContentContainer>
            </div>
            <div className="">
                <ContentContainer
                    loc="projects/"
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
