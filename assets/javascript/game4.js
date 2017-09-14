
var crystalNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var randomCrystalNumbers = [];
var randomNumber = 0;
var total = 0;
var wins = 0;
var losses = 0;





function startGame() {

	total = 0;
	document.getElementById("guessedNumber").innerHTML = total;

	randomCrystalNumbers = [];

	function guessNumberOption(min, max) {
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	}  // got this from MDN "Getting a random number between two values"
	guessNumberOption(19, 120);
	console.log(randomNumber);




	while(randomCrystalNumbers.length < 4) {  // until there are four random numbers, repeat:
		// generate a random number
		var randomNum = Math.floor(Math.random()* crystalNumberOptions.length + 1);
		// if the number is already in the array, go back to the beginning of the loop
		// "continue" says to stop and go back to the beginning. the beginning here is the loop. 
		if(randomCrystalNumbers.indexOf(randomNum) > -1) continue;
		// if the number is new, add it to the array
	    randomCrystalNumbers[randomCrystalNumbers.length] = randomNum; // how does this work? 
	}

	console.log(randomCrystalNumbers);

	// reset game
	// randomNumber = 0;
	// total = 0;


	document.getElementById("numberToGuess").innerHTML = "Number to guess: " + randomNumber;
}


function tally() {


	$(".crystal1").on("click", function() {
		total += randomCrystalNumbers[0];     //why doesn't "total" update the global variable????
		document.getElementById("guessedNumber").innerHTML = total;
		console.log(total); {
			// check if user won

			if (total === randomNumber) {
				wins++;
				alert("you chose wisely. play again.");
				document.getElementById("win").innerHTML = wins + " wins";
				startGame();
			} 

			// check if user lost

			else if(total > randomNumber) { 
				losses++;
				alert("you chose poorly. play again.");
				document.getElementById("loss").innerHTML = losses + " losses";
				startGame();

			}
		}
	});
	$(".crystal2").on("click", function() {
		total += randomCrystalNumbers[1];
		document.getElementById("guessedNumber").innerHTML = total;
		console.log(total); {
			// check if user won

			if (total === randomNumber) {
				wins++;
				alert("you chose wisely. play again.");
				document.getElementById("win").innerHTML = wins + " wins";
				startGame();
			} 

			// check if user lost

			else if(total > randomNumber) { 
				losses++;
				alert("you chose poorly. play again.");
				document.getElementById("loss").innerHTML = losses + " losses";
				startGame();
			}
		}
	});
	$(".crystal3").on("click", function() {
		total += randomCrystalNumbers[2];
		document.getElementById("guessedNumber").innerHTML = total;
		console.log(total); {
			// check if user won

			if (total === randomNumber) {
				wins++;
				alert("you chose wisely. play again.");
				document.getElementById("win").innerHTML = wins + " wins";
				startGame();
			} 

			// check if user lost

			else if(total > randomNumber) { 
				losses++;
				alert("you chose poorly. play again.");
				document.getElementById("loss").innerHTML = losses + " losses";
				startGame();
			}
		}
	});
	$(".crystal4").on("click", function() {
		total += randomCrystalNumbers[3];
		document.getElementById("guessedNumber").innerHTML = total;
		console.log(total); {
			// check if user won

			if (total === randomNumber) {
				wins++;
				alert("you chose wisely. play again.");
				document.getElementById("win").innerHTML = wins + " wins";
				startGame();
			} 

			// check if user lost

			else if(total > randomNumber) { 
				losses++;
				alert("you chose poorly. play again.");
				document.getElementById("loss").innerHTML = losses + " losses";
				startGame();
			}
		}

	});		
}


function clear() {
	total = 0;
}


startGame();
tally();
clear();





