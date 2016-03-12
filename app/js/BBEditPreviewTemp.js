////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


//Unit 3 Homework
function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // homework 3
    
     var getInput = function() {
     console.log("Please choose either 'rock', 'paper', or 'scissors'.");
     var answer = prompt();
     return answer;
     };
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     var getInput = function () {
    	console.log("Please choose either 'rock', 'paper', or 'scissors'.");
     var answer = prompt();
     return answer;
    };
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    //Homework 4
    function getWinner(playerMove,computerMove) {
  var winner;
  if (playerMove === 'rock' && computerMove === 'scissors') {  
    winner = 'Player';
  }  
  else if (playerMove === 'scissors' && computerMove === 'paper') {
    winner='Player';
  }  
  else if (playerMove === 'paper' && computerMove === 'rock') {
    winner='Player';
  } 
  else if (playerMove === 'paper' && computerMove === 'scissors') {
    winner='Computer';
  }  
  else if (playerMove === 'rock' && computerMove === 'paper') {
    winner='Computer';
  }  
  else if (playerMove === 'scissors' && computerMove === 'rock') {
    winner = 'Computer';
  }  
  else { 
  winner = "tie";
  }
  return winner;
}

//Unit 5 Homework

function playToFive() 
{
  var playerWins = 0;
  var computerWins = 0;
  
  if (playerWins <= 5 || computerWins <= 5)
  {
    var computerMove = getComputerMove(); 
    var playerMove = getPlayerMove();
    var winner = getWinner(playerMove , computerMove);
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    if (winner === "Player") {
        playerWins += 1; 
    } 
    else if (winner === "Computer") {
        computerWins += 1;
    } 
    if ((playerWins === 5) || (computerWins === 5)) {
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
        console.log("The final score is: " + playerWins + " to " + computerWins);
    }
    else {
        console.log("The " + winner + ' takes the round. It is now ' + playerWins + ' to ' + computerWins);
    }
  }

    
    return [playerWins, computerWins];
}

