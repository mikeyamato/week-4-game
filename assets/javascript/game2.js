// **********************************************************************
// 								DO NOT USE
// **********************************************************************




// generate a random number to guess between 19 - 120

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}  // got this from MDN "Getting a random number between two values"

	console.log(randomNumber(19, 120));
	// this works

// guessing numbers should be randomy generated between 1 - 12 (4 of these)

var crystalNumberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var randomCrystalNumbers = [];
				

while(randomCrystalNumbers.length < 4) {  // until there are four random numbers, repeat:
	
	// generate a random number
	var randomNum = Math.floor(Math.random()* crystalNumberOptions.length + 1);
	
	// if the number is already in the array, go back to the beginning of the loop
	// "continue" says to stop and go back to the beginning. the beginning here is the loop. 
	if(randomCrystalNumbers.indexOf(randomNum) > -1) continue;
    
	// if the number is new, add it to the array
    randomCrystalNumbers[randomCrystalNumbers.length] = randomNum; // how does this work? 

}
// document.write(randomCrystalNumbers);
console.log(randomCrystalNumbers);


var randomNumber = 0;
var total = 0;
var wins = 0;
var losses = 0;



while (total < 100) {
	$(document).ready(function(){
		$(".crystal1").on("click", function() {
			total += randomCrystalNumbers[0];     //why doesn't "total" update the global variable????
			console.log(total);
		});
		$(".crystal2").on("click", function() {
			total += randomCrystalNumbers[1];
			console.log(total);
		});
		$(".crystal3").on("click", function() {
			total += randomCrystalNumbers[2];
			console.log(total);
		});
		$(".crystal4").on("click", function() {
			total += randomCrystalNumbers[3];
			console.log(total);
		});
	

	// if(total === randomNumber) {
	// 	console.log("good job");
	// 	win++;
	// 	} else if(total > randomNumber) { 
	// 		console.log("better luck next time");
	// 		losses++;
	// };
	});
// }













 			
				


// if guessed correctly, player wins. win statement appears. win score increases by 1. game resets. 

// if guessed incorrectly, player loses. loss statement appears. losses score increases by 1. game resets. 

	// $('.button').button();






var html =
"<p>Number to Guess: " + randomNumber(19, 120) + "</p>" +
"<p>My 1st number: " + randomCrystalNumbers[0] + "</p>" +
"<p>My 2nd number: " + randomCrystalNumbers[1] + "</p>" +
"<p>My 3rd number: " + randomCrystalNumbers[2] + "</p>" +
"<p>My 4th number: " + randomCrystalNumbers[3] + "</p>"	+
"<p>Total: " + total + "</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
	// #game is a CSS selector, that's why on the HTML page "game" is tied to an id.
	// why does " = html;" come at the end though?