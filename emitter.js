var person = {
    "firstname" : "Elo",
    "Lastname": "Agbawe",
    "greet": function(){
        console.log(this.firstname + " " + this.Lastname)
    }
}

var john = Object.create(person);
john.firstname = "john";
john.Lastname = "Doe";
john.greet();

person.greet.call();
person.greet.apply();
person.greet.call({"firstname": "Oke", "Lastname": "Idiodi"});
person.greet.apply({"firstname": "Oke", "Lastname": "Idiodi"});

function Address(houseNumber,street,town,city,state){
    this.houseNumber = houseNumber,
    this.street = street,
    this.town = town,
    this.city = city,
    this.state = state
}

var myAddress = new Address(12,"Afieki","Ekpan","Warri","Delta State");


console.log(myAddress.houseNumber + " " + myAddress.street + " " + myAddress.state);