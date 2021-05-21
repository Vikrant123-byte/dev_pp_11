const fs = require("fs");

console.log("start");


fs.readFile("./f1.text",getData );

function getData(error , data){
    console.log(data+"");

}

console.log("end");

while("end"){
    
};