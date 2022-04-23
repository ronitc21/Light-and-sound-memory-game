var pattern = [1,5,3,2,4,1,3,2,4,5,1,3,1,5,4,1]; 
var patternLength = 8;
var numBtns = 6;
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  
var guessCounter = 0;
var freqMap = {} 
var clueHoldTime = 1000.0; 
var curScore = 0; 
var highScore = 0; 
var timer; 
var timeGiven = 10; 
var timeRemaining = 0; 

//Global constants
const cluePauseTime = 333; 
const nextClueWaitTime = 1000; 
//General game functions
function startGame(){
  //initialize game variables
  let startingFreq = 420;
  for (let i = 0; i < numBtns; i++) freqMap[i+1] = startingFreq+30*i;
  progress = 0;
  clueHoldTime = 1000.0;
  gamePlaying = true;
  curScore = 0;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  let delay = nextClueWaitTime; 
  guessCounter = 0;
  clueHoldTime *= 0.9;
  clearTimeout(timer);
  document.getElementById("p2").innerHTML = "Time remaining: " + timeGiven;
  for(let i=0;i<=progress;i++){ 
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) 
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  
  timeRemaining = timeGiven;
  timer = setTimeout(function tick() {
    if (gamePlaying) {
      updateTimer();
      timer = setTimeout(tick, 1000); 
    }
  }, delay);
}

function updateParagraph() {
    document.getElementById("p1").innerHTML = "Press buttons in the same order as the original pattern to win.\nCurrent Score: "+curScore+" | High Score: "+highScore;
}
function clearTimer() {
  clearTimeout(timer);
  timeRemaining = 0;
  document.getElementById("p2").innerHTML = "";
}
function updateTimer() {
    if (timeRemaining >= 0) {
      document.getElementById("p2").innerHTML = "Time remaining: " + timeRemaining;
      timeRemaining--;
    } else {
      loseGame();
    }
}

//User input functions
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      progress++;
      curScore = progress;
      updateParagraph();
      if (progress == patternLength) {
        winGame();
        return;
      }
      playClueSequence();
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
    return;
  }
}


var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
updateParagraph();