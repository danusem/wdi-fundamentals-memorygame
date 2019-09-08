var cards = ["queen", "queen", "king", "king"];
cards.length;

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);

	if (cards.length === 2) {
 	checkForMatch();
  	}

}

flipCard(0);
flipCard(2);
checkForMatch();