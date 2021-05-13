const fs = require("fs");


let f1kaData= fs.readfilesync("./f1.text","utf");
let f2kaData= fs.readfilesync("./f2.text","utf8");


let bothoutput = f1kaData +"\n" +f2kaData;

//let bothoutput=f1kaData +"\n" +f2kaData;
//console.log("f1kaData");
//console.log("f2kaData");

//f1kaData
//-s flag

function applySFlag(f1kadata){
    //hey i am f1
    //space
    //space
    //space
    //space
    //space
    // bye i am f1

    let splitteData = f1kaData.split("");
    console.log(f1kaData);

    //hey i am f1
    //space
    //bye i am f1

}



applySFlag(f1kaData);