import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';
import './index.css';
import LoginPage from "./pages/Login/Login";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider> 
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
