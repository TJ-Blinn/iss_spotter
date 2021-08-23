// /*
// It will require and run our main fetch function.
// */
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");
const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   // use request to fetch IP address from JSON API |  IPv4 IP address in JSON format.

//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// //********************************** Test fetchCoordsByIP

// fetchCoordsByIP("173.179.228.200", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates:", coordinates);
// });

// //********************************** Test fetchISSFlyOverTimes

// const exampleCoords = { latitude: "-31.3853", longitude: "24.5508" };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned Flyover times:", passTimes);
// });

// //********************************** Test nextISSTimesForMyLocation

const printPassTimes = function (passTimes) {
  // once index.js has the array of flyover times, it can loop through the data objects and print out the string.

  for (const pass of passTimes) {
    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    // pass === value from risetime in seconds + setUTCSeconds method (elem + value)
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // sucess! Print out the deets!
  //console.log(passTimes);
  printPassTimes(passTimes);
});
