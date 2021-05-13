const fs =require("fs");
const cheerio = require("cheerio");

let htmlkaData = fs.readFileSync("./index.html" , "UTF8");

//console.log(htmlkaData);
//we have a html file
let myDocument=cheerio.load(htmlkaData);

let h1element = myDocument("h1").text();
console.log(h1element);

