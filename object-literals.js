var schoolDetails = {
      fullName: "Jane Doe",
      faculty: "Engineering",
      department: "Computer Engineering",
      university: "Uniben",
      fullDetails: function(){
          console.log("My name is " + this.fullName + ". I'm currently studying "
          + this.department + " in the faculty of "+ this.faculty +" in "+ this.university)
      }
}

schoolDetails.fullDetails();
console.log(schoolDetails["faculty"]);

var [,,school] = ["uniben","jane","doe"];
console.log(school);
const arto = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
// setInterval(arto.greet, 1000)
setTimeout(arto.greet.bind(arto), 1000);
