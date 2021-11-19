import React from "react";
import Header from "../Header/Header.js";
import ExperienceCard from "./Card/ExperienceCard.js"

export default function Dashboard({ db, setToken }) {

	return (
		<div>
			<Header setToken={setToken}/>
			<h3 className="p-md-5 bg-light">My Experience</h3>
			<ExperienceCard db={db} dbRef="myexp" cNameBg="bg-light"/>
		</div>
	);
}
