// Create a Deck class that's a standard playing card set
// Deck must have shuffle, reset and deal methods
// Also create a Player class that has a name, a card hand, able to take a card and discard a card
// Using these 2 classes create a basic blackjack game

// Everything kept in one file only for assignment (classes would be better modularized)
// Blackjack game needs refactoring and improvement, but the basics work currently

class Card {

	constructor(rank, suit){
		this._rank = rank;
		this._suit = suit;
		this._value;

		if(rank.constructor.name == "Number"){
			this.value = rank;
		}
		else{
			this.value = rank == "Ace" ? 11 : 10;
		}
	}

	get suit(){
		return this._suit;
	}

	get rank(){
		return this._rank;
	}

	get value(){
		return this._value;
	}

	set value(val){
		this._value = val;
	}

}

class Deck {

	constructor(){
		this.deck = [];
		this.reset();
	}

	shuffle(){
		let deck = this.deck;
		function random(){
			return Math.floor(Math.random() * deck.length);
		}

		for(let i = 0; i < 200; i++){
			let rand1 = random();
			let rand2 = random();
			let temp = this.deck[rand1];
			this.deck[rand1] = this.deck[rand2];
			this.deck[rand2] = temp;
		}
	}

	reset(){
		let ranks = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"];
		let suits = ["Clubs","Spades","Hearts","Diamonds"];

		for(let i = 0; i < 4; i++){
			for(let j = 0; j < 13; j++){
				this.deck.push(new Card(ranks[j], suits[i]));
			}
		}
	}

	deal(){

		let deckSize = this.deck.length;
		if(deckSize == 0){
			this.reset();
			this.shuffle();
		}

		let dealtCard = this.deck.pop();
		return dealtCard;

	}

}

class Player {

	constructor(name){
		this.name = name;
		this.hand = [];
		this.money = 0;
		this.bet = 0;
	}

	hit(card){
		this.hand.push(card); 
	}

	discard(card){
		const cardIdx = this.hand.indexOf(card);

		if(cardIdx != -1){
			this.hand.splice(cardIdx, 1);
		}
	}

	addMoney(cash){
		this.money += cash;
	}

	placeBet(amount){
		if(amount < this.money){
			this.money -= amount;
			this.bet += amount;
		}
		else{
			console.log("You don't have enough money to cover this bet");
		}
	}

	removeBet(oddsX, oddsY){
		this.money += (this.bet * oddsX / oddsY);
		this.bet = 0;
	}

}

class Blackjack {

	constructor(){
		this.deck = new Deck();
		this.players = [];
		this.dealer = new Player("House");

		this.dealer.cardTotal = 0;
	}

	addPlayer(player){
		player.cardTotal = 0;
		player.inGame = true;
		// player need to place bet - will just have program select a random bet for now until get user prompt working
		let randomBet = Math.floor((Math.random() * 95) + 5);
		player.placeBet(randomBet);
		this.players.push(player);
	}

	removePlayer(player){
		let playerIdx = this.players.indexOf(player);

		if(playerIdx != -1){
			this.players.splice(playerIdx, 1);
		}
	}

	playRound(){
		let gameOn = this.firstDeal();

		if(gameOn){
			console.log("House wins with Blackjack! This round is over");
		}
		else{
			this.midRound();
			this.dealerRound();
			this.payOut();
		}

	}

	firstDeal(){
		let dealtCard;
		this.deck.shuffle();
		for(let i = 0; i < 2; i++){
			for(let j = 0; j < this.players.length; j++){
				dealtCard = this.deck.deal();
				console.log(`player dealt card is: ${dealtCard.value}`);
				this.players[j].hand.push(dealtCard);
				this.players[j].cardTotal += dealtCard.value;
			}
			dealtCard = this.deck.deal();
			console.log(`dealer dealt card is: ${dealtCard.value}`);
			this.dealer.hand.push(dealtCard);
			this.dealer.cardTotal += dealtCard.value;
		}

		let dealer21 = this.dealer.cardTotal === 21 ? true : false;

		for(let i = 0; i < this.players.length; i++){
			if(this.players[i].cardTotal == 21 && dealer21){
				console.log(`House and ${this.players[i].name} have Blackjack!`);
				this.players[i].removeBet(1, 1);
				this.players[i].inGame = false;
			}
			else if(this.players[i].cardTotal == 21){
				console.log(`${this.players[i].name} wins with Blackjack!!`);
				this.players[i].removeBet(3, 2);
				this.players[i].inGame = false;
			}
			else if(dealer21){
				this.players[i].removeBet(0, 1);
			}
		}

		return dealer21;

	}

	midRound(){
		console.log("starting midRound");
		for(let i = 0; i < this.players.length; i++){
			// console.log(this.players[i]);
			while(this.players[i].inGame && this.players[i].cardTotal <= 21){
				// Need to get user input
				// let playerChoice = prompt("Hit or Stand");
				// for now will have program determine based on house rules
				let playerChoice = this.players[i].cardTotal < 17 ? "Hit" : "Stand";
				console.log(`${this.players[i].name} Choice is ${playerChoice}`);
				if(playerChoice ==  "Hit"){
					let dealtCard = this.deck.deal();
					this.players[i].hand.push(dealtCard);
					this.players[i].cardTotal += dealtCard.value;
					console.log(`${this.players[i].name}'s card total is now ${this.players[i].cardTotal}`);
					if(this.players[i].cardTotal > 21){
						console.log(`Sorry ${this.players[i].name}, you have busted`);
						this.players[i].removeBet(0,1);
						this.players[i].inGame = false;
					}
				}
				else{
					break;
				}
			}
		}
	}

	dealerRound(){
		console.log("Dealer round starting");
		while(this.dealer.cardTotal < 17){
			let dealtCard = this.deck.deal();
			this.dealer.hand.push(dealtCard);
			this.dealer.cardTotal += dealtCard.value;
		}

		if(this.dealer.cardTotal > 21){
			console.log("dealer busts!!!!");
		}
	}

	payOut(){
		console.log("Final payouts");
		for(let i = 0; i < this.players.length; i++){
			if(this.players[i].inGame && this.dealer.cardTotal > 21){
				this.players[i].removeBet(2, 1);
				console.log(`${this.players[i].name} won because dealer busted`);
			}
			else if(this.players[i].inGame){
				if(this.players[i].cardTotal > this.dealer.cardTotal){
					console.log(`Congrats ${this.players[i].name}! You beat the house`);
					this.players[i].removeBet(2, 1);
				}
				else if(this.players[i].cardTotal == this.dealer.cardTotal){
					console.log(`${this.players[i].name}'s game ended in a PUSH`);
					this.players[i].removeBet(1, 1);
				}
				else{
					console.log(`Sorry ${this.players[i].name}, you lose`);
					this.players[i].removeBet(0, 1);
				}
			}
			else{
				console.log(`${this.players[i].name} busted out`);
			}
			console.log(`${this.players[i].name} now has ${this.players[i].money}`);
		}
	}


}


//various tests
deck1 = new Deck();
console.log(deck1.deck); // array of cards unshuffled/in order
deck1.shuffle();
console.log(deck1.deck); // array of cards in random order (shuffled)
deck1.shuffle();
console.log(deck1.deck); // array of cards in diff order from previous
player1 = new Player("David");
player1.addMoney(100);
player1.placeBet(5);
console.log(player1.name); // David
console.log(player1.hand); // empty array
player1.hit(deck1.deal());
player1.hit(deck1.deal());
console.log(deck1.deck.length); // 50
console.log(player1.hand); // array with 2 cards
player2 = new Player("Shane");
player2.addMoney(200);
player3 = new Player("Todd");
player3.addMoney(500);
game1 = new Blackjack();
game1.addPlayer(player2);
game1.addPlayer(player3);
console.log(game1.players); // array with 2 players
console.log("Game is about to Start!!!!!!!");
game1.playRound();



