import React from 'react';
import './App.css';
import data from './data.js';
console.log(data.products);
function RenderProducts( ) {
  return(
    <div className="Product">
      <h2>{data.products.length} Products</h2>
      {data.products.map( product => {
        return(
          <li key={product.id}>
            <strong>{product.name}</strong> made from {product.material}
          </li>
        )
      })}
    </div>
  )
}

export default RenderProducts;
