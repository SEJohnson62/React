import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';

console.log(data);
function RenderProducts( ) {
  return(
    <div className="Product">
      <h2>{data.products.length} Products</h2>
      {data.products.map( (product, idx)=> {
        return(
          <li>{product.name}</li>
        )
      })}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default RenderProducts;
