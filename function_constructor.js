var Greett = function(){
    this.greeting = "Hello world";
    this.greet = function(){
        console.log(this.greeting);
    }
}

module.exports = new Greett();