import React from "react";
import CardExpandableWithImage from "components/Card/ExpandableWithImage";
import CardExpandable from "components/Card/Expandable";
import ContentContainer from "components/Content/index";
import Header from "components/Header/index";
import { firebaseAuth } from "db/firebase";
import { signOut } from "firebase/auth";

export default function Dashboard() {
	const signOutUser = () => {
		signOut(firebaseAuth);
	};

	return (
		<React.Fragment>
			<Header signOut={signOutUser} />
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
