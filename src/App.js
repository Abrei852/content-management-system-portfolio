import "./App.css";
import React, { useState, useEffect } from "react";
import Dashboard from "pages/Dashboard/index";
import Login from "pages/Login/index";
import Preferences from "pages/Preferences/Preferences";
import { firebaseAuth } from "db/firebase";
import { Route, Switch, Redirect } from "react-router-dom";

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
            <Switch>
                <Route exact path="/">
                    {!user ? (
                        <Redirect to="/login" />
                    ) : (
                        <Redirect to="/dashboard" />
                    )}
                </Route>
                <Route path="/login">
                    {!user ? <Login /> : <Redirect to="/dashboard" />}
                </Route>
                <Route path="/preferences">
                    <Preferences />
                </Route>
                <Route path="/dashboard">
                    {!user ? <Redirect to="/login" /> : <Dashboard />}
                </Route>
            </Switch>
        </div>
    );
}
