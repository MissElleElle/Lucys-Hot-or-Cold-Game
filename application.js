$(document).ready(function(){
	var randomNumber; 
	var guess; 
	var numberGuesses; 
	newGame(); 

function newGame(){
	randomNumber=Math.floor(Math.random() *100) + 1; 
	numberGuesses=0; 
	$("#inputbox").val(""); 
	$("#message").text("Are you ready to play? Good Luck!"); 
	$("#guesses").text("");
} 

function newGuess() {
	guess=$("#inputbox").val(); 
	if (isNaN(guess)){
		$("#message").text("This is not a number! Please choose a number."); 
	}		 							   
	else {
		numberGuesses++; 
		$("#guesses").text("Number of guesses: " + numberGuesses); 
		hotorCold(guess);
	}
}

$("#submit").click(function(e){
	newGuess();
});

$("#submit").keydown(function(e){
    if(e.keyCode == 13){
       newGuess();
    }
});

$("#inputbox").keydown(function(e){
  if (e.keyCode == 13) {
    $("#submit").click();
	return false;
  }
});

function hotorCold(userInput){ 
	var absoluteGuess = Math.abs(randomNumber-userInput); 
	if (numberGuesses <10){  
		if (userInput==randomNumber){					
			$("message").text("Congratulations! You guessed the right number!"); 
		} 	
		else if (isNaN(userInput)) { 
			$("#message").text("This is not a number! Please choose a number."); 
		}	
		else if (userInput>100 || userInput<1)	{
			$("#message").text("Oops! Remember to choose a number between 1 and 100.")
		}											   
		else if (absoluteGuess <=5){  
			$("#message").text("Getting very hot!");
		}
		else if (absoluteGuess >=6 && absoluteGuess <=10){  
			$("#message").text("You're getting warmer!");
		}
		else if (absoluteGuess >=11 && absoluteGuess <=20){  
			$("#message").text("You're getting colder!");
		}
		else if (absoluteGuess >=20){
			$("#message").text("Brr! You are way too cold!")
		};
	}
	else {
		$("#message").text("It took you too many guesses. Game Over! Click New Game to play again!"); 
	};
}

$("#newgame").click(function(){  
	newGame(); 	
});

});

