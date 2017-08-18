import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      unitPrice: 0,
      quantity: 0,
    };
    
    this.extendedPrice = this.extendedPrice.bind(this);
  }
  
  extendedPrice() {
    return this.state.unitPrice * this.state.quantity;
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <section>
          <h1>Javascript Katas</h1>
          <h1><small>Supermarket Pricing</small></h1>
          <section>
            <h3>Bean pricing</h3>
            <div>
              <label htmlFor="simple-unit-price" className="input-label">Price per can:</label>
              <input
                type="number"
                id="simple-unit-price"
                value={this.state.unitPrice.toLocaleString()} />
            </div>
            <div>
              <label htmlFor="simple-quantity" className="input-label">Cans:</label>
              <input type="number" id="simple-quantity" value={this.state.quantity} />
            </div>
            <div>
              <label htmlFor="simple-extended-price" className="input-label">Extended price:</label>
              <input
                type="number"
                id="simple-extended-price"
                value={this.extendedPrice().toLocaleString()}
                readOnly={true} />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
