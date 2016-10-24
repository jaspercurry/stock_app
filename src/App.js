import React, { Component } from 'react';
import './App.css';
import StockContainer from './components/stock_container'

class App extends Component {
  render() {
    console.log("Hello there! To use this app you need a token for the tradier API. Ask Jasper for it! :)");
    return (
      <div className="container">
          <h1>Stocks App</h1>
          <StockContainer/>
      </div>
    );
  }
}

export default App;
