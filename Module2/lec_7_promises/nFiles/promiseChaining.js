//promise chining -to avoid promises hall 
// intial state is pendeg
//either the pending promise can be resolved or rejected
//if pending promise is resolved - success call back is invoked
//if pending promises is rejected-failur callback is invoked

//scb can be attached to pending promises using then function
//fcb can be attached to pending promises using catch functon

// then and catch can only be called on pending promises
//then() and catch() function are async function!
//then and catch also return a pending promises
const fs = require("fs");

let f1kapromise = fs.promises.readFile("./f1/text");

 f1kapromise.then(function(f1kadata){
    console.log(data+"");
    let f2kapromise = fs.promises.readFile("./f2.text");
    return f2kapromise;
})
.then(function(f2kadata){
    console.log(f2kadata);
    let f3kapromise =fs.promises.readFile("./f3.text");
    return f3kapromise;
})
.then(function(f3kadata){
    console.log(f3kadata);
})
 