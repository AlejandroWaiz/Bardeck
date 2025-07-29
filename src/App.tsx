import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage}/>
    </Switch>
  );
}

export default App;
