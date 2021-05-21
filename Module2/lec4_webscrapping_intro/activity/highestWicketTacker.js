let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");

//request( matchLink ,cb  );


//function cb(error , response,data){
    //console.log("got the data !!!");
    //console.log(data);
   // fs.writeFileSync("./match.html" , data);
//}

let htmlkaData=fs.readFileSync("./match.html","utf8");

let myDocument = cheerio.load(htmlkaData);

let bothBowlingTables = myDocument(".table.bowler");
//{
    //"0"  : {bowling table},
    //"1"  : {bowlig table}
//}
let highestWicketTakerName;
let highestWicketTaken;
let economyofhighestWicketTaker;

for(let i=0 ; i<bothBowlingTables.length ; i++){
    let bowlingTables= myDocument(letBowlingTables[i]);
    let allTableRows = bowlingTable.find("tbody tr");



    for(let j=0 ; j<allTableRows.length ; j++){
        let allTds = myDocument(allTableRows[j]).find("td");

        if(i==0 && j==0){
            highestWicketTakenName = myDocument(allTds[0]).find("a").text();
            highestWicketTaken =  myDocument(allTds[4]).text();
            economyofHighestWicketTaken = myDocument(allTds[5]).text();
        }
        else{
            let currentWicket = myDocument(allTds[4]).text();
            if(currentWickets >highestWicketsTaken){
                highestWicketTakenName = myDocument(allTds[0]).find("a").text();
                highestWicketTaken =  myDocument(allTds[4]).text();
                economyofHighestWicketTaken = myDocument(allTds[5]).text();
            }
        }
    }

}




console.log("name of highest wicket taker="+highestWicketTakerName);
console.log("wickets taken ="+ highestWicketTaken);
console.log("economy=" + economyofhighestWicketTaker);