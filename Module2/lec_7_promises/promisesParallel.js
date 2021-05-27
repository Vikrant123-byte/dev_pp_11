//parallel read  f1 and f2,f3 using promisified function
const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1.text");
let f2kapromise = fs.promises.readFile("./f2.text");
let f3kapromise = fs.promises.readFile("./f3.text");

f1kapromise.then(function(data){
    console.log(data+"");
});
f2kapromise.then(function(data){
    console.log(data+"");
});
f3kapromise.then(function(data){
    console.log(data+"");
});