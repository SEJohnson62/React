import React from 'react';
import './App.css';
import data from './data.js';

function groupUsersByState(){
  //returns object where key is a state
  //value for each key is the array of those users in that state
  const userObj = {};
  const numUsers = data.users.length;
  let i;
  console.log("Group these ",data.users.length," users by state.");
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
  const compObjs = {};
  return compObjs;
}
function groupProductsByMaterial(){
  const prodObjs = {};
  return prodObjs;
}

function RenderStats() {
  // Display the state with the most users.
  const usersByStateObj = groupUsersByState();

  console.log(usersByStateObj);
    //Find state with the most users
    let mostUsers = 0;
    let savedKeys = [];
    for( const key in usersByStateObj ){
      let count = usersByStateObj[key].length;

      if( count > mostUsers ) {
        mostUsers = count;
        savedKeys = [key]; //re-initialize saved key array;
      } else if( count === mostUsers) {
        savedKeys.push(key); //add key to array
      }
    }


  // Display the state with the most companies.
  const compByStateObjs = groupCompaniesByState();
  console.log(compByStateObjs);

  // Display the most common material for products.
  const productByMaterialObjs = groupProductsByMaterial();
  console.log(productByMaterialObjs);

  return(
    <div className="User">
    <h2>There are {mostUsers} users in the following state(s):</h2>
    <p>{savedKeys.join(' - ')}</p>
    </div>
  )
}//end of RenderStats

export default RenderStats;
