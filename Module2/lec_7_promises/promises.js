const fs = require("fs");
//promisi avoids callback hell
let pendingpromise =fs.promises.readFile("./f1.text");
console.log(pendingpromise);

//promise ka object uske pass dofunction then() and catch();
//then function attaches a success callback to the pendingpromise
pendingpromise.then(function(data){
    console.log("inside scb");
    console.log(data+"");
});

//catch function attaches a failure callback to the pendingpromise
pendingpromise.catch( function(error){
    console.log("inside fcb");
    console.log(error); 
});