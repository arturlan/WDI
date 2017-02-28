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

var cards = [cardOne, cardTwo, cardThree, cardFour];

var cardsInPlay = [];

var createrCards = function(x) {

	for (var i = 0; i < x.length; i++) {
		var newElement = document.createElement('div');
		newElement.className = 'card';

		newElement.setAttribute('data-card', cards[i]);

		newElement.addEventListener('click', isTwoCards);
		boardGame.appendChild(newElement);
	}
};

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }
}

createrCards(cards);


