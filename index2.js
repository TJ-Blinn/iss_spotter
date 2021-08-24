/*
Modify index2.js to require and call the function.
Require and call the function fetchMyIP in this file.
Since this function returns a promise, call .then on its return value. 
This then call should take in a callback which accepts the response body and, for now, prints it to the screen.

In index2.js, we should now add a reference to the fetchCoordsByIP function to our promise "chain", using .then(), immediately after the call to fetchMyIp.

In other words, provide fetchCoordsByIP as a callback using .then so as to make it the next thing to be run after fetchMyIP is run.
*/

//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss_promised");

const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./index");

// see index.js for printPassTimes
// copy it from there, or better yet, moduralize and require it in both files

// Call
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((body) => console.log(body));
