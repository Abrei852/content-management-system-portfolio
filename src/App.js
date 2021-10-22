import React, { useState } from 'react'
import Preferences from "./components/Preferences/Preferences"
import Dashboard from "./components/Dashboard/Dashboard"
import Login from "./components/Login/Login"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
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
