// A module is a reusable block of code whose existence does not accidentally impact other code

//This will return everything on the required file
// require("./functions.js");

var firstName = "Elo";
var lastName = "Agbawe";

function fullName(firstName, lastName){
       console.log("Hello, "+ firstName + " "+ lastName);
}

fullName("Chidinma", "Obi");
module.exports = fullName;