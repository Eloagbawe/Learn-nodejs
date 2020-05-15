var fullName = require("./modules-exports-require.js");
var deets = require("./require-exports");
var subjects = require("./require.js");
var greet = require("./function_constructor.js");
var greet2 = require("./hello.js").greet;

fullName();

subjects.subject1();

console.log(deets.name);
greet.greet();
greet2();