var readlineSync = require("readline-sync");
var userName = readlineSync.question("Please enter your name: ");

console.log("Welcome "+userName);
console.log("Let's play a short quiz on GOT");
console.log("-------------------");

var score = 0;
var highscore = 3;

function play(ques,ans){

  var userAnswer = readlineSync.question(ques);
  if(userAnswer.toUpperCase() == ans){
    score+=1
    console.log("Yay!!you got it right");
  }
  else if (userAnswer.toUpperCase() == 'E'){
    console.log("The answer is "+ans);
  }
  else{
    console.log("sorry homie!!");
  }
  console.log("Score is :"+score);
}
var hs1={
  name:"Mahendra",
  score:2
}
var hs2={
  name:"Steve",
  score:2
}
var hs = [hs1,hs2];
var q1 = {
  question:"How many times has Sansa Stark married?\nA Twice\nB Thrice\nC Once \nD Zero\nType e to find the answer if you dont know\n",
  answer: 'A'
}

var q2 = {
  question:"\nHow are Jon Snow and Daenerys Targaryan related?\nA Nephew and Aunt\nB Brother and Sister\nC Unrelated\nD Rivals\nType e to find the answer if you dont know\n",
  answer:"A"
}

var q3 = {
  question:"\nWhat is Aarya Starks sword called?\nA Needle\nB OathKeeper\nC Unnamed\nD LongClaw\nType e to find the answer if you dont know\n",
  answer:"A"
}
var arrayQuestions = [q1,q2,q3];
var len = arrayQuestions.length;
for(var i=0;i<len;i++){
var q = arrayQuestions[i];
play(q.question,q.answer);
console.log("-------------------");
}

console.log("\nYour final score is : "+score);
if(score==highscore){
  console.log("Hey! you're a legit fan of game of thrones!!\nHurrah You have beaten the highest score.");
}

console.log("\nHigh scores are as follows:");
for(var i=0;i<2;i++){
  console.log(hs[i].name+"\t"+hs[i].score);
}
console.log("\nif you somehow beat the highscore then send a screenshot to me \nToodles!!");