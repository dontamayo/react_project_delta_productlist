import React, { Component } from 'react';
import logo from './sunlight-logo.png';
import './App.css';


class App extends Component {
  constructor( ){
    super();
    this.state = {
      products: []

    }
  }
//when you fetch you get a promise
  async getProducts(){
    const response = await fetch('http://localhost:8082/api/products');
    const json = await response.json();
    console.log(json);
    this.setState({ products: json._embedded.products })
  }

  componentDidMount() {
    this.getProducts();

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Product list</h1>
        </header>
      </div>
    );
  }
}

export default App;
