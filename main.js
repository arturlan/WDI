var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";


// if (cardOne === cardTwo) {
// 	alert("You found a match!");
// } else if (cardThree === cardFour) {
// 	alert("You found a match!");
// } else if (cardTwo === cardFour) {
// 	alert("Sorry, try again.");
// }
var boardGame = document.getElementById('game-board');
var createrCards = function(x) {

	for (var i = 0; i < x.length; i++) {
		var newElement = document.createElement('div');
		newElement[i].className = 'card';
		boardGame.appendChild(newElement);
	}
};

createrCards(4);