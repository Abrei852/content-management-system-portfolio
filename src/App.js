import "./App.css";
import React, { useState, useEffect } from "react";
import Dashboard from "pages/Dashboard/index";
import Header from "layouts/Header/index";
import Login from "pages/Login/index";
import Settings from "pages/Settings/index";
import { firebaseAuth } from "db/firebase";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { signOut } from "firebase/auth";

export default function App() {
	const [user, setUser] = useState();

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				setUser(firebaseUser);
				firebaseUser.getIdToken().then((idToken) => {
					sessionStorage.setItem("utkn", idToken);
				});
			} else {
				setUser();
				sessionStorage.removeItem("utkn");
			}
		});
	}, []);

	const signOutUser = () => {
		signOut(firebaseAuth);
	};

	return (
		<div className="App">
			<Header signOut={signOutUser} />
			<Routes>
				<Route
					exact
					path="/"
					element={
						!user ? (
							<Navigate to="/login" />
						) : (
							<Navigate to="/dashboard" />
						)
					}
				/>
				<Route
					path="/login"
					element={!user ? <Login /> : <Navigate to="/dashboard" />}
				/>
				<Route path="/settings" element={<Settings />} />
				<Route
					path="/dashboard"
					element={!user ? <Navigate to="/login" /> : <Dashboard />}
				/>
			</Routes>
			<ToastContainer />
		</div>
	);
}
