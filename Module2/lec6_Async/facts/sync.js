const fs = require("fs");


console.log("start");


//sync
 let f1Kacontent = fs.readFileSync("./f1.text");
 console.log(f1Kacontent+"");

console.log("end"); 
