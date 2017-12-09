import React, { Component } from 'react';
import logo from './logo.svg';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Transactions from "./Transactions";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/Transactions">Transactions</a></li>
          </ul>
        <div className="content">
        </div>
    </div>
    );
  }
}

export default App;
