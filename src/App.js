import React from "react";
import "./App.css";
import { signOutUser, firebaseAuth, firebaseDb } from './db/firebase'
import Preferences from "./components/Preferences/Preferences";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import useToken from "./useToken";

export default function App() {
	const { token, setToken } = useToken();

	if (!token && firebaseAuth.currentUser !== null) {
		signOutUser();
	}

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					{!token ? <Redirect to="/login" /> : <Redirect to="/dashboard" /> }
				</Route>
				<Route path="/login">
					{!token ? <Login auth={firebaseAuth} setToken={setToken} /> : <Redirect to="/dashboard" /> }
				</Route>
				<Route path="/preferences">
					<Preferences />
				</Route>
				<Route path="/dashboard">
					{!token ? <Redirect to="/login" /> : <Dashboard db={firebaseDb} setToken={setToken}/> }
				</Route>
			</Switch>
		</div>
	);
}