import React from "react";
import "./App.css";
import { signOutUser } from './db/firebase'
import Preferences from "./components/Preferences/Preferences";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import useToken from "./useToken";

function App() {
	const { token, setToken } = useToken();
	const history = useHistory();

	if (!token) {
		signOutUser();
		history.push("/login")
	}

	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Redirect to="/login" />
				</Route>
				<Route path="/login">
					<Login setToken={setToken} />
				</Route>
				<Route path="/preferences">
					<Preferences />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
