var Greett = function(){
    this.greeting = "Hello world";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greett();

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    info(){
        console.log(`${this.name} is ${this.age} years old`);
    }
}

// let john = new Person("John",15);
// john.info();

class Country extends Person{
    constructor(name,age,country){
        super(name,age);
        this.country = country;
    }
    info(){
        super.info();
        console.log(`And he is from ${this.country.join(" which is the capital of ")}`);
    }
}
let personalInfo = new Country("John",15,["Asaba","Delta State"]);
personalInfo.info();