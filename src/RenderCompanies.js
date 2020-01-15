import React from 'react';
import './App.css';
import data from './data.js';


function RenderCompanies( ) {
  return(
    <div className="Company">
      <h2>{data.companies.length} Companies</h2>
      {data.companies.map( company => {
        return(
          <li key={company.id}>
            <strong>{company.name}</strong>
          </li>
        )
      })}
    </div>
  )
}

export default RenderCompanies;
