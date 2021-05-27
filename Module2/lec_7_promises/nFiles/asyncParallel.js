let files = ["../f1.text" ,"../f2.text" ,"../f3.text"];

const fs =require("fs");

for(let i=0 ;i<files.length ;i++){
    let fileskapromise = fs.promises.readFile(files[i]);
    filekapromise.then(function(data){
        console.log(data+"");
    })
}
