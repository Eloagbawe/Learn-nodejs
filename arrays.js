var cities = [];
cities.push(function(){
    console.log("lagos")
});

cities.push(function(){
    console.log("abuja")
});

cities.push(function(){
    console.log("warri")
})

cities.forEach(function(add){
    add();
})