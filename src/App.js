import React from "react";
import "./App.css";
import Preferences from "./components/Preferences/Preferences";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import useToken from "./useToken";

function App() {
	const { token, setToken } = useToken();

	if (!token) {
		return <Login setToken={setToken} />;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/preferences">
						<Preferences />
					</Route>
					<Route path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
