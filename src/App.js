import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EpodComponent from './EpodComponent/';

class App extends Component {
  render() {
    let epodInfo = [
      {url: "/", title: "Test"},
      {url: "/", title: "Test"}
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EpodComponent info={epodInfo} />
      </div>
    );
  }
}

export default App;
