import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Component/Info';
import Header from './Component/Header';
import Transaccion from './Component/Transaccion';
import Tabla from './Component/Tabla';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Info></Info>
        <Transaccion></Transaccion>
        <Tabla></Tabla>
        </div>
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <p>
    //     Edit <code>src/App.js</code> and save to reload.
    //   </p>
    //   <a
    //     className="App-link"
    //     href="https://reactjs.org"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Learn React
    //   </a>
    // </header>
    );
  }
}

export default App;
