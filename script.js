var cluePauseTime = 333;
var nextClueWaitTime = 1000;
var clueHoldTime = 1000;
var x = 5
var pattern = new Array(x);
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var strikes = 0;
var score = 0;

function makePattern(){
  for(let i = 0; i < pattern.length; i++){
    pattern[i] = Math.floor((Math.random()*5) + 1);
  }
  console.log(pattern[1]);
}


function startGame(){
  strikes = 0;
  progress = 0;
  gamePlaying = true;
  makePattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 565.2,
  5: 789.4,
  6: 353.4
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

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for(let i = 0; i <= progress; i++){
    console.log("play single cue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i])
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
}

function winGame(){
  stopGame();
  alert("Game Over. You Won.");
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == x - 1){
        winGame();
      }else{
        score++;
        var displayScore = document.getElementById("score");
        displayScore.innerHTML = score;
        progress++;
        playClueSequence();
      }
    }else{
      guessCounter++;
    }
  }else{
    strikes++;
    if(strikes == 3){
      loseGame();
    }else{
      progress = 0;
      clueHoldTime = 985;
      playClueSequence();
      alert("Do better next time!!");
    }
  }
}