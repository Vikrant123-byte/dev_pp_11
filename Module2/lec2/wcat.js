const fs = require("fs");


let f1kaData= fs.readfilesync("./f1.text","utf");
let f2kaData= fs.readfilesync("./f2.text","utf8");


let bothoutput = f1kaData +"\n" +f2kaData;


console.log("f1kaData");
console.log("f2kaData");

