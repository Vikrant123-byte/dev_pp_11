//seRIAL read content f1 ,f2 And f3 using promises function
 const fs = require("fs");
let f1kadata = fs.promises.readFile("./f1.text");

f1kapromise.then(function(data){
    console.log(data+"");
    let f2kadata = fs.promise.readFile("./f2.text");
    f2kapromise.then(function(data){
        console.log(data+"");
        let f3kadata = fs.promise.readFile("./f3.text");
        f3kapromise.then(function(data){
            console.log(data+"");
        })
    })
})        