import React from 'react';
import './App.css';
import data from './data.js';

console.log(data.companies);
function RenderCompanies( ) {
  return(
    <div className="Company">
      <h2>{data.companies.length} Companies</h2>
      {data.companies.map( company => {
        return(
          <li key={company.id}>
            <strong>{company.name}</strong>, {company.state}
          </li>
        )
      })}
    </div>
  )
}

export default RenderCompanies;
