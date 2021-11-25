import React from "react";
import Header from "components/Dashboard/Header/Header.js";
import ExperienceCard from "components/Dashboard/ExperienceCard/ExperienceCard";
import Title from "components/Dashboard/Title/Title";

export default function Dashboard({ db, setToken }) {
    return (
        <div>
            <Header setToken={setToken} />
            <Title h3="My Experience" cls="p-md-5" />
            <ExperienceCard db={db} dbRef="myexp" cNameBg="bg-light" />
        </div>
    );
}
