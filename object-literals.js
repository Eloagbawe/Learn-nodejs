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

// schoolDetails.fullDetails();
// console.log(schoolDetails["faculty"]);

var [,,,school] = ["uniben","jane","doe"];
console.log(school);