var playerOne = [];
  playerOne[1] = 0;
var playerTwo = [];
  playerTwo[1] = 0;
var playerThree = [];
  playerThree[1] = 0;
var playerCount;
var blankQuestion;
var blankExpression;
var arrayExpression = [];
var moneyWheel = [3000, 5000, 4000, 7000, 2000, "bankrupt", 8000, 3000, 5000, 2000];

function assignName(player) {
  var tempNum = parseInt(player);
    console.log(tempNum);
  if (tempNum === 1) {
    var playerOneName;
    playerOneName = document.getElementById('playerOneNameInput').value;
      console.log(playerOneName);
    playerOne[0] = playerOneName;
      console.log(playerOne);
    playerCount = 1;
    document.getElementById('nameTwo').innerHTML = "Submit";
    document.getElementById('startButton').innerHTML = "Start Game";
  }
  if (tempNum === 2) {
    var playerTwoName;
    playerTwoName = document.getElementById('playerTwoNameInput').value;
      console.log(playerTwoName);
    playerTwo[0] = playerTwoName;
      console.log(playerTwo);
    playerCount = 2;
    document.getElementById('nameThree').innerHTML = "Submit";
  }
  if (tempNum === 3) {
    var playerThreeName;
    playerThreeName = document.getElementById('playerThreeNameInput').value;
      console.log(playerThreeName);
    playerThree[0] = playerThreeName;
      console.log(playerThree);
    playerCount = 3;
  }
}

function generatePhrase() {
    document.getElementById('startButton').innerHTML = " ";
    document.getElementById('begrnd').innerHTML = "click here to start round";
    document.getElementById('nameOne').innerHTML = " ";
    document.getElementById('nameTwo').innerHTML = " ";
    document.getElementById('nameThree').innerHTML = " ";
    arrayExpression = [];
  var tempQuery = Math.round( ( Math.random() * 100 ) );
    console.log(tempQuery);
  if (0 <= tempQuery && tempQuery <= 10) {
    blankQuestion = "Place";
    blankExpression = "oval office";
  }
  else if (10 < tempQuery && tempQuery <= 20) {
    blankQuestion = "Person";
    blankExpression = "lebron james";
  }
  else if (20 < tempQuery && tempQuery <= 30) {
    blankQuestion = "In the kitchen";
    blankExpression = "cooking";
  }
  else if (30 < tempQuery && tempQuery <= 40) {
    blankQuestion = "Food and Drink";
    blankExpression = "fried chicken";
  }
  else if (40 < tempQuery && tempQuery <= 50) {
    blankQuestion = "Event";
    blankExpression = "christmas";
  }
  else if (50 < tempQuery && tempQuery <= 60) {
    blankQuestion = "Event";
    blankExpression = "thanksgiving";
  }
  else if (60 < tempQuery && tempQuery <= 70) {
    blankQuestion = "Food and Drink";
    blankExpression = "broccoli";
  }
  else if (70 < tempQuery && tempQuery <= 80) {
    blankQuestion = "In the kitchen";
    blankExpression = "cheffin";
  }
  else if (80 < tempQuery && tempQuery <= 90) {
    blankQuestion = "Place";
    blankExpression = "palatine";
  }
  else if (90 < tempQuery && tempQuery <= 100) {
    blankQuestion = "Person";
    blankExpression = "shakira";
  }
    console.log(blankQuestion);
    console.log(blankExpression);
  document.getElementById('questionBox').innerHTML = blankQuestion;
createArray();
}

var displayArray = [];
function createArray() {
  displayArray = [];
  arrayExpression = [];
    var tempCharacterCounter = 0;
    var tempCharacterDumper;
  while (blankExpression.length >= tempCharacterCounter + 1) {
    tempCharacterDumper = blankExpression.charAt(tempCharacterCounter);
    arrayExpression.push(tempCharacterDumper);
    if (blankExpression.charAt(tempCharacterCounter) === " ") {
      displayArray.push("-");
    }
    else {
      displayArray.push("_");
    }
    tempCharacterCounter++;
  }
    console.log(arrayExpression);
    console.log(displayArray);
  document.getElementById('guessingBox').innerHTML = displayArray.join(" ");
}
    var roundNumber = 0;
function beginRound() {
  if (gameValid === 1) {
    generatePhrase();
      gameValid = 0;
      roundNumber++;
  }
  if (playerCount >= 1) {
    updateScores();
    beginTurn(1);
  }
  if (playerCount >= 2) {
    updateScores();
    beginTurn(2);
  }
  if (playerCount >= 3) {
    updateScores();
    beginTurn(3);
  }
  if (gameValid != 1) {
    updateScores();
    beginRound();
  }
  if (roundNumber === 2) {
    updateScores();
    endGame();
    console.log('GAME END');
  }
}

function beginTurn(playerNumIndex) {
  updateScores();
  spinWheel();
  makeGuess(playerNumIndex);
}

    var priceAssign;
function spinWheel() {
    var tempPriceAssign;
  tempPriceAssign = Math.round( Math.random() * 10 );
    console.log(tempPriceAssign);
  if (tempPriceAssign < 10) {
    priceAssign = moneyWheel[tempPriceAssign];
  }
  if (tempPriceAssign === 10) {
    priceAssign = moneyWheel[0];
  }
  document.getElementById('wheel').src = "wheel" + tempPriceAssign + ".png";
  if (tempPriceAssign === 10) {
    document.getElementById('wheel').src = "wheel0.png";
  }
    console.log(priceAssign);
}

  var correctValid = 0;
  var guessedLetters = [];
function makeGuess(playerIndex) {
  updateScores();
  assessArray(playerIndex);
  var tempIndex;
    if (playerIndex === 1) {
      tempIndex = playerOne[0];
    }
    if (playerIndex === 2) {
      tempIndex = playerTwo[0];
    }
    if (playerIndex === 3) {
      tempIndex = playerThree[0];
    }
  if (gameValid != 1) {
  var userGuess = prompt("Player " + tempIndex + " make your guess:");
      console.log(userGuess);
      var arrayIndex = arrayExpression.indexOf(userGuess);
        console.log( arrayExpression.indexOf(userGuess) );
      var arrayIndex2 = arrayExpression.indexOf(userGuess, (arrayExpression.indexOf(userGuess) + 1 ) );
        console.log( arrayExpression.indexOf(userGuess, (arrayExpression.indexOf(userGuess) + 1 ) ) );
      var previousValid = 0;
    if (guessedLetters.indexOf(userGuess) >= 0) {
      previousValid = 1;
      console.log('mememememememememem');
    }
    guessedLetters.push(userGuess);
    document.getElementById('guessedLetterBox').innerHTML = guessedLetters;
    if (arrayIndex >= 0 && previousValid != 1) {
      displayArray[arrayIndex] = userGuess;
      if (arrayIndex2 >= 0) {
        displayArray[arrayIndex2] = userGuess;
      }
  document.getElementById('guessingBox').innerHTML = displayArray.join(" ");
    var correctValid = 1;
      if (playerIndex === 1) {
        playerOne[1] = playerOne[1] + priceAssign;
          console.log("player one money = " + playerOne[1] );
        if (priceAssign === "bankrupt") {
          playerOne[1] = 0;
        }
      }
      if (playerIndex === 2) {
        playerTwo[1] = playerTwo[1] + priceAssign;
          console.log("player two money = " + playerTwo[1] );
          if (priceAssign === "bankrupt") {
            playerTwo[1] = 0;
          }
      }
      if (playerIndex === 3) {
        playerThree[1] = playerThree[1] + priceAssign;
          console.log("player three money = " + playerThree[1] );
          if (priceAssign === "bankrupt") {
            playerThree[1] = 0;
          }
      }
  updateScores();
  beginTurn(playerIndex);
    }
  }
}
  var gameValid = 0;
function assessArray(playerNum) {
  if (displayArray.indexOf("_") > -1) {
    /* does not win :( */
  }
  else {
    guessedLetters = [];
    document.getElementById('guessedLetterBox').innerHTML = guessedLetters;
      gameValid = 1;
      var playerWon = playerNum;
    if (playerWon === 1) {
      playerWon = playerOne[0];
    }
    if (playerWon === 2) {
      playerWon = playerTwo[0];
    }
    if (playerWon === 3) {
      playerWon = playerThree[0];
    }
    /* document.getElementById('header1').innerHTML = playerWon + " finished the phrase/word!"; */
    updateScores();
  }
}

function updateScores() {
  document.getElementById('playerUno').innerHTML = playerOne[0] + "'s score is: $" + playerOne[1];
  document.getElementById('playerDos').innerHTML = playerTwo[0] + "'s score is: $" + playerTwo[1];
  document.getElementById('playerTres').innerHTML = playerThree[0] + "'s score is: $" + playerThree[1];
}

function endGame() {
  if (playerOne[1] > playerTwo[1] && playerOne[1] > playerThree[1]) {
    alert(playerOne[0] + " has won the game with $" + playerOne[1]);
  }
  if (playerTwo[1] > playerOne[1] && playerTwo[1] > playerThree[1]) {
    alert(playerTwo[0] + " has won the game with $" + playerTwo[1]);
  }
  if (playerThree[1] > playerTwo[1] && playerThree[1] > playerOne[1]) {
    alert(playerThree[0] + " has won the game with $" + playerThree[1]);
  }
}
