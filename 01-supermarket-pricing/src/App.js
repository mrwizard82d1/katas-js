import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
          <div className="container">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 class="panel-title">Bean Pricing</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <label htmlFor="simple-unit-price" className="input-label col-md-6">
                    Price per can:
                  </label>
                  <input type="number" id="simple-unit-price col-md-6" />
                </div>
                <div className="row">
                    <label htmlFor="simple-quantity" className="input-label col-md-6">Cans:</label>
                    <input type="number" id="simple-quantity col-md-6" />
                </div>
                <div className="row">
                  <label htmlFor="simple-extended-price" className="input-label col-md-6">
                    Extended price:
                  </label>
                  <input type="number"
                         id="simple-extended-price"
                         readOnly={true}
                         className="col-md-6"/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
