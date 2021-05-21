//simultenously read all the files and get data!!
//multiple files
//async code likna ha
const fs = require("fs");

console.log("start");

fs.readFile("./f1.text" , function(err ,data){
    console.log(data+"");
    fs.readFile("./f2.text" , function(err ,data){
        console.log(data+"");
        fs.readFile("./f3.text" , function(err ,data){
          console.log(data+"");
        })
    })    

})


console.log("end");
