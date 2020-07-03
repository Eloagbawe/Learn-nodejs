var fullName = require("./modules-exports-require.js");
var deets = require("./require-exports");
var subjects = require("./require.js");
var greet = require("./function_constructor.js");
var greet2 = require("./hello.js").greet;
const http = require("http");

fullName();

subjects.subject1();

console.log(deets.name);
greet.greet();
greet2();

http.createServer(function(req,res){
    res.writeHead(200, {"content-type": "application/json"});
    res.end("Hello World");
    
}).listen(4000, '127.0.0.1');