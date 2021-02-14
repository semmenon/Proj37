var canvas;
var  gameState, contestantCount, database, quiz, question, contestant
var gameState = 0

function setup(){
  database = firebase.database ()
  canvas = createCanvas(850,400);
  quiz = new Quiz ()
  quiz.getState()
  quiz.start()
  question = new Question ()
}


function draw(){
  background("pink");
  question.display()
  
}
