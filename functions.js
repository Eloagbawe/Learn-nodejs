//An expression is a block of code that results in a value. In Javascript, functions are first-class

//function statement

var a = 4;
var b = 8;
var c = 12;

function sum(){
    console.log(a+b);
}
sum();

//functions are first class

function logSum(fn){
    fn();
}

logSum(sum);

//function expression

var addition = function(){
    console.log(a+c);
}
addition();
logSum(addition);

//setting a function as a variable on the go
logSum(function(){
    console.log(b+c);
});

//internally invoked function
(function multiplication(){
    console.log(a*c);
}());

//function constructors are normal functions that are used to hold objects

function painting(name,age){
    this.name = name;
    this.age = age;
}
painting.prototype.details = function(){
    console.log("The name of this painting is " + this.name + " and it is " + this.age + " years old.");
}
var monalisa = new painting("Mona Lisa", 112);
monalisa.details();