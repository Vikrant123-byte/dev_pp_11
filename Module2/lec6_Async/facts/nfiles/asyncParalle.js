let files = ["../f1.text" ,"../f2.text" , "../f3.text"];
const fs = require("fs");
console.log("start");

for(let i=0 ;i<files.length ;i++){
    fs.readFile(files[i], function(err , data){
        console.log(data+"");

    })
}

console.log("end");