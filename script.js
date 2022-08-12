/*Add your JavaScript here*/

var rotiniScore = 0; //store the rotini score
var fettuccineScore = 0; //store the fettuccine score

var questionCount = 0; //store the number of answers clicked on

//store HTML elements using the DOM
var result = document.getElementById("result");
var buttonResult = document.getElementById("bresult");
var restart = document.getElementById("restart");

//store HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");

//listen for click on answer buttons and call function if clicked
restart.addEventListener("click", restartQuiz);

//disable both buttons in the question if one answer is clicked and call rotini or fettuccine function if clicked
q1a1.addEventListener("click", rotini);
q1a1.addEventListener("click", disableBtnQ1);

q1a2.addEventListener("click", fettuccine);
q1a2.addEventListener("click", disableBtnQ1);

q2a1.addEventListener("click", rotini);
q2a1.addEventListener("click", disableBtnQ2);

q2a2.addEventListener("click", fettuccine);
q2a2.addEventListener("click", disableBtnQ2);

q3a1.addEventListener("click", rotini);
q3a1.addEventListener("click", disableBtnQ3);

q3a2.addEventListener("click", fettuccine);
q3a2.addEventListener("click", disableBtnQ3);

q4a1.addEventListener("click", rotini);
q4a1.addEventListener("click", disableBtnQ4);

q4a2.addEventListener("click", fettuccine);
q4a2.addEventListener("click", disableBtnQ4);

q5a1.addEventListener("click", fettuccine);
q5a1.addEventListener("click", disableBtnQ5);

q5a2.addEventListener("click", rotini);
q5a2.addEventListener("click", disableBtnQ5);

q6a1.addEventListener("click", rotini);
q6a1.addEventListener("click", disableBtnQ6);

q6a2.addEventListener("click", fettuccine);
q6a2.addEventListener("click", disableBtnQ6);

//rotini function that tracks rotini score and question score and increments them + updates result
function rotini() {
  rotiniScore += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " rotiniScore = " + rotiniScore);
  
  if (questionCount == 6) {
  console.log("The quiz is done!");
  updateResult();
}
}

//fettuccine function that tracks fettuccine score and question score and increments them + updates result

function fettuccine() {
  fettuccineScore += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " fettuccineScore = " + fettuccineScore);

  if (questionCount == 6) {
  console.log("The quiz is done!");
  updateResult();
}
}

//update quiz result
function updateResult() {
  buttonResult.addEventListener("click", displayResult);
  buttonResult.addEventListener("click", disableBtnResult);
}

//display result function
function displayResult() {
  if (rotiniScore >= 4) {
    result.innerHTML = "You are a rotini person! 🍝";
    console.log("You are a rotini person!");
  } else if (fettuccineScore >= 4) {
    result.innerHTML = "You are a fettuccine person! 🍝";
    console.log("You are a fettuccine person!");
  } else if (rotiniScore == 3 && fettuccineScore == 3) {
    result.innerHTML = "You are a rotini AND a fettuccine person! 🍝";
    console.log("You are a rotini AND a fettuccine person!");
  } else {
    result.innerHTML = "Your result is... 🍝";
  }
}

function restartQuiz() {
  result.innerHTML = "Your result is... 🍝";
  rotiniScore = 0;
  fettuccineScore = 0;
  questionCount = 0;

  console.log("rotiniScore = " + rotiniScore + " fettuccineScore = " + fettuccineScore + " questionCount = " + questionCount);

  enableBtn();
}

function disableBtnQ1() {
    q1a1.disabled = true;
    q1a2.disabled = true;
    console.log("disabled");
}

function disableBtnQ2() {
    q2a1.disabled = true;
    q2a2.disabled = true;
    console.log("disabled");
}

function disableBtnQ3() {
    q3a1.disabled = true;
    q3a2.disabled = true;
    console.log("disabled");
}

function disableBtnQ4() {
    q4a1.disabled = true;
    q4a2.disabled = true;
    console.log("disabled");
}

function disableBtnQ5() {
    q5a1.disabled = true;
    q5a2.disabled = true;
    console.log("disabled");
}

function disableBtnQ6() {
    q6a1.disabled = true;
    q6a2.disabled = true;
    console.log("disabled");
}

function disableBtnResult() {
    buttonResult.disabled = true;
    console.log("disabled");
}

function enableBtn() {
    q1a1.disabled = false;
    q1a2.disabled = false;
    q2a1.disabled = false;
    q2a2.disabled = false;
    q3a1.disabled = false;
    q3a2.disabled = false;
    q4a1.disabled = false;
    q4a2.disabled = false;
    q5a1.disabled = false;
    q5a2.disabled = false;
    q6a1.disabled = false;
    q6a2.disabled = false;
    buttonResult.disabled = false;
    console.log("enabled");
}
