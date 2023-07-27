
let info = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  

let reactionVal = info[0].score;
let memoryVal = info[1].score;
let verbalVal=info[2].score;
let visualVal = info[3].score;


const reactionNum= document.querySelector("#reac");
const memoryNum= document.querySelector("#mem");
const verbalNum= document.querySelector("#ver");
const visualNum= document.querySelector("#vis");



const resultNumText= document.querySelector("#resultValue");
const resultText = document.querySelector("#pLower");
const resultHeading= document.querySelector("#h2Lower");
const button1 =  document.querySelector("#continue");


button1.onclick = returnVal;


function returnVal(){
    randomize();
    average = Math.floor((reactionVal+memoryVal+verbalVal+visualVal)/4);
    resultNumText.innerText = average ;
    reactionNum.innerText = reactionVal;
    memoryNum.innerText = memoryVal;
    verbalNum.innerText = verbalVal;
    visualNum.innerText = visualVal;
    resultParagraph(average);
    console.log("Done!!");
    

}

function randomize(){
    reactionVal =Math.floor(Math.random(0,100)*100);
    memoryVal = Math.floor(Math.random(0,100)*100);
    verbalVal = Math.floor(Math.random(0,100)*100);
    visualVal = Math.floor(Math.random(0,100)*100);
}

function resultParagraph(val){
    if(val >= 70 ){
        resultHeading.innerText ="Great";
        resultText.innerText="You scored higher than 65% of \nthe people who have taken \nthese tests";
    }else{
        if(val >= 50 && val < 70){
            resultHeading.innerText ="Good";
            resultText.innerText="You scored higher than 40% of \nthe people who have taken\n these tests";
        }else{
            resultHeading.innerText ="Too Bad";
            resultText.innerText="You scored lower than 90% of \nthe people who have taken\n these tests";
        }
}
        }
