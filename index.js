/*
It will require and run our main fetch function.

* Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 *
 * 'https://api.ipify.org?format=json'
{"ip":"173.179.228.203"}
*/
const { fetchMyIP } = require("./iss");

fetchMyIP((error, ip) => {
  // use request to fetch IP address from JSON API |  IPv4 IP address in JSON format.

  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned IP:", ip);
  return ip;
});

module.exports = { fetchMyIP };

//**********************************api.ipify.org for NODE
// const http = require("http");

// http.get({ host: "api.ipify.org", port: 80, path: "/" }, function (resp) {
//   resp.on("data", function (ip) {
//     console.log("My public IP address is: " + ip);
//   });
// });
//**********************************

module.exports = { fetchMyIP };
