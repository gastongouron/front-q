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
      <HashRouter>
        <div>
          <div className="container">
              <div className="left">
                <div className="logo">
                   <h1>Finpal</h1>
                </div>
                  <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/transactions">Transactions</NavLink></li>
                  </ul>
              </div>
              <div className="right">
                <div className="bar"></div>
                <div className="content">
                  <Route exact path="/" component={Home}/>
                  <Route path="/transactions" component={Transactions}/>
                </div>
              </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
