
import './App.css';
import data from './data.js';

function GroupUsersByState(){
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
      userObj[state].count++;
    } else {
      // start new group
      userObj[state] = [data.users[i]];
      userObj[state].count = 1;
    }
  }
  const states = Array.from(userObj);
  console.log("There are ",states.length, " states.")
  return states;
} //end GroupUsersByState

function GroupCompaniesByState(){
  const compObjs = {};
  return compObjs;
}
function GroupProductsByMaterial(){
  const prodObjs = {};
  return prodObjs;
}

function RenderStats() {
  // Display the state with the most users.
  const states = GroupUsersByState();

    //Find state with the most users
    const mostUsers = 0;
    let mostUsersIdx = 0;
    let i = 0;

    for( i = 0; i < states.length; i++ ){
      if( states[i].count > mostUsers ) {
        console.log("count=", states[i].count)
        mostUsersIdx = i;
      }
    }
  console.log(mostUsersIdx);
  console.log(states[mostUsersIdx])

  // Display the state with the most companies.
  const compObjs = GroupCompaniesByState();
  console.log(compObjs);

  // Display the most common material for products.
  const productObjs = GroupProductsByMaterial();
  console.log(productObjs);
  return;
}

export default RenderStats;
