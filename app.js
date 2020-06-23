var fs = require ("fs");

fs.readFile("./hello.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile("./hello.txt", "My name is Kome",(err, data) =>{
    if (err) throw err;
    console.log("content saved!");
});

fs.appendFile("./hello.txt", " And I am a boy", (err,data) => {
    if (err) throw err;
    console.log("content edited!");
});
fs.open("./newFile.txt", "w", (err, fd) => {
    if (err) throw err;
    console.log("file opened!");
});
console.log("Yayy!");