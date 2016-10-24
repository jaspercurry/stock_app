import React, { Component } from 'react';
import './App.css';
import StockContainer from './components/stock_container'

class App extends Component {
  render() {
    return (
      <div className="container">
          <h1>Stocks App</h1>
          <StockContainer/>
      </div>
    );
  }
}

export default App;
