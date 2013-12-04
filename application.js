$(document).ready(function(){
	//Initialize variables
	var randomNumber; 
	var guess; 
	var numberGuesses; 
	newGame(); 

	// Function is called when user clicks the "New Game" button.  Assigns a
	// value to the randomNumber variable (which is the secret number),
	// clears the text in the input field, and sets the text in the game area.
	// Function accepts no paramaters and does not return a value.
	function newGame(){
		randomNumber=Math.floor(Math.random() *100) + 1; 
		console.log(randomNumber);
		numberGuesses=0; 
		$("#inputbox").val(""); 
		$("#message").text("Are you ready to play? Good Luck!"); 
		$("#guesses").text("");
	} 

	// Function is called by the event handlers attached to the "#submit" element.
	// Function accepts no paramaters and does not return a value, but grabs
	// the user's input and either prompts the user to enter a number or, if
	// the input is a number, fires the hotorCold() function.
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

	// Event handler for clicks on the "#submit" button.
	$("#submit").click(function(e){
		newGuess();
	});

	// Event handler for when the user presses enter in the "#inputbox" element.
	// When the function is called it creates a click event on the #submit.
	$("#inputbox").keydown(function(e){
  		if (e.keyCode == 13) {
    		$("#submit").click();
			return false;
  		}
	});

	// Called by newGuess once the user has submitted a guess that is a number.
	function hotorCold(userInput){ 
		var absoluteGuess = Math.abs(randomNumber-userInput); 
		if (numberGuesses <10){  
			if (userInput==randomNumber){					
				$("#message").text("Whoohoo!!! You guessed the right number! Congratulations!"); 
			} 	
			else if (userInput>100 || userInput<1)	{
				$("#message").text("Oops! Remember to choose a number between 1 and 100.")
			}	
			else if (absoluteGuess <=2){
				$("#message").text("You're getting red hot!!!");
			}								   
			else if (absoluteGuess <=5){  
				$("#message").text("You're getting very hot!");
			}
			else if (absoluteGuess >=6 && absoluteGuess <=10){  
				$("#message").text("You're getting warmer!");
			}
			else if (absoluteGuess >=11 && absoluteGuess <=20){  
				$("#message").text("Uh Oh! You're getting colder!");
			}
			else if (absoluteGuess >=20){
				$("#message").text("Brr! You're way too cold!")
			}
		}
		else {
			$("#message").text("It took you too many guesses. Game Over! Click New Game to play again!"); 
		}
	}

	$("#newgame").click(function(){  
		newGame(); 	
	});

});

