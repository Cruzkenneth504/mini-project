var wins = 0;
var ties = 0;
var losses = 0;


var options = ["R", "P", "S"];

var playGame = function() {
  
  var userChoice = prompt("Welcome to Rock, Paper, Scissors. Please enter R, P, or S to play:");


  if (!userChoice) {
    
    alert ("Thanks for visiting. Bye!");
    return;
  }


  userChoice = userChoice.toUpperCase();


  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  alert("The computer went with " + computerChoice);

  
  if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

  
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;   window.alert("You have won!");

  
  } else {
    losses++; window.alert("You lost!");
  }


  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );


  var playAgain = window.confirm("Would you like to play again?");

  
  if (playAgain) {
    playGame();
  }
};

playGame();


