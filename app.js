var fullName = require("./modules-exports-require.js");
var deets = require("./require-exports");
var subjects = require("./require.js");

fullName();

subjects.subject1();

console.log(deets.name);