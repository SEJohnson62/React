import React from 'react';
import './App.css';
import data from './data.js';

console.log(data.users);
function RenderUsers( ) {
  return(
    <div className="User">
      <h2>{data.users.length} Users</h2>
      {data.users.map( user => {
        const company = data.companies.find( company => company.id === user.companyId );
        return(
          <li key={user.id}>
            <strong>{user.name}</strong> from { user.state } works for { company.name }
          </li>
        )
      })}
    </div>
  )
}

export default RenderUsers;
