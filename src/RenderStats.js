import React from 'react';
import './App.css';
import data from './data.js';

function groupUsersByState(){
  //returns object where key is a state
  //value for each key is the array of those users in that state
  const userObj = {};
  const numUsers = data.users.length;
  let i;
  for( i = 0; i < numUsers; i++ ) {
    const state = data.users[i].state;
    if( userObj[state] ) {
      // add element to current group
      // of user objects
      userObj[state].push(data.users[i]);
    } else {
      // start new group
      userObj[state] = [data.users[i]];
    }
  }
  return userObj;
} //end groupUsersByState

function groupCompaniesByState(){
  //returns object where key is a state
  //value for each key is the array of companies in that state
  const compObjs = {};
  const numCompanies = data.companies.length;
  let i;
  console.log("Group these ",numCompanies," users by state.");
  for( i = 0; i < numCompanies; i++ ){
    const state = data.companies[i].state;
    if( compObjs[state] ) {
      //add company to the current group
      compObjs[state].push(data.companies[i]);
    } else {
      //start a new group
      compObjs[state] = [data.companies[i]];
    }
  }
  return compObjs;
} //end groupCompaniesByState

function groupProductsByMaterial(){
  //returns object where key is a material
  //value for each key is the array of products that use that material
  const prodObjs = {};
  const numProducts = data.products.length;
  let i;
  console.log("Group these ",numProducts," products by material.");
  for( i = 0; i < numProducts; i++ ){
    const material = data.products[i].material;
    if( prodObjs[material] ){
      //add product to the current group
      prodObjs[material].push(data.products[i]);
    } else {
      //start a new group
      prodObjs[material] = [data.products[i]];
    }
  }
  return prodObjs;
} //end groupProductsByMaterial

function RenderStats(){
  // Displays the following statistics:
  //    The state with the most users.
  //    The state with the most companies.
  //    The most common material for products.

  const usersByStateObj = groupUsersByState();
    //Find state with the most users
    let mostUsers = 0;
    let savedKeys = [];
    for( const key in usersByStateObj ){
      let count = usersByStateObj[key].length;
      if( count > mostUsers ) {
        mostUsers = count;
        savedKeys = [key]; //re-initialize saved key array
      } else if( count === mostUsers ) {
        savedKeys.push(key); //add key to array
      }
    }

  const compByStateObjs = groupCompaniesByState();
    //Find state with the most companies
    let mostCompanies = 0;
    let savedCompanyKeys = [];
    for( const key in compByStateObjs ){
      let count = compByStateObjs[key].length;
      if( count > mostCompanies ) {
        mostCompanies = count;
        savedCompanyKeys = [key]; //re-initialize saved key array
      } else if( count === mostCompanies ){
        savedCompanyKeys.push(key); //add key to array
      }
    }

  const productByMaterialObjs = groupProductsByMaterial();
    //Find the most common material used in the products
    let mostProducts = 0;
    let savedProductKeys = [];
    for( const key in productByMaterialObjs ) {
      let count = productByMaterialObjs[key].length;
      if( count > mostProducts ){
        mostProducts = count;
        savedProductKeys = [key]; //re-initialize saved key array
      } else if( count === mostProducts ){
        savedProductKeys.push(key); //add key to array
      }
    }

  return(
    <div className="User">
      <h2>Data Statistics:</h2>
      <h3>There are {mostUsers} users in the following state(s):</h3>
      <p>{savedKeys.join(' - ')}</p>

      <h3>There are {mostCompanies} companies in the following state(s):</h3>
      <p>{savedCompanyKeys.join(' - ')}</p>

      <h3>The most common material(s) used:</h3>
      <p>{savedProductKeys.join(' - ')}</p>
    </div>
  )
}//end of RenderStats

export default RenderStats;
