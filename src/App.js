import "./App.css";
import React, { useState, useEffect } from "react";
import Dashboard from "pages/Dashboard/index";
import Login from "pages/Login/index";
import Preferences from "pages/Preferences/Preferences";
import { firebaseAuth } from "db/firebase";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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

    return (
        <div className="App">
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
                <Route path="/preferences" element={<Preferences />} />
                <Route
                    path="/dashboard"
                    element={!user ? <Navigate to="/login" /> : <Dashboard />}
                />
            </Routes>
            <ToastContainer />
        </div>
    );
}
