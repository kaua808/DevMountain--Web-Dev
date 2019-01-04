$(document).ready(function() {

	//what does this do?
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}


	deck = shuffle(deck);
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	
	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evently divide the deck up between the two players
	var deal = function(deck) {
		for (var i = 0; i < deck.length; i++) {
			if (i % 2 === 1) {
			    cards_player_1.push(deck[i]) 
			} else {
				cards_player_2.push(deck[i])
			}
        }
    } 
	
	deal(deck);
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card_1, card_2){
			if (card_1.number > card_2.number) {
				return "you win!";
			} else if (card_1.number < card_2.number) {
				return "you lose!";
			} else {
				return "tie";
			}
		}

//or 
	

	// var war = function(card_1, card_2){
	// 		if (card_1.number > card_2.number) {
	// 			return "you win!";
	// 		}
	// 		if (card_1.number < card_2.number) {
	// 			return "you lose!"
	// 		}
	// 		return "tie!";
	// 	}

	
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		var winner = war(cards_player_1[0], cards_player_2[0])
		
		if (winner === "you win!") {
			cards_player_1.push(cards_player_1.shift());
			cards_player_1.push(cards_player_2.shift());
		} else if (winner === "you lose!") {
			cards_player_2.push(cards_player_2.shift());
			cards_player_2.push(cards_player_1.shift());
		} else if (winner === "tie") {

			var tieWinner = war(cards_player_1[3], cards_player_2[3]);

			if (tieWinner === "you win!") {
				cards_player_1 = cards_player_1.concat(cards_player_1.splice(0, 4));
				cards_player_1 = cards_player_1.concat(cards_player_2.splice(0, 4));
							
			} else if (tieWinner === "you lose!") {
				cards_player_2 = cards_player_2.concat(cards_player_1.splice(0, 4));
				cards_player_2 = cards_player_2.concat(cards_player_2.splice(0, 4));
			}
		}
		//this function (defined below) will continue to the next turn
		advance();
	}
	
	//or

	// var play = function() {

	// 	var card_1 = cards_player_1.shift();
	// 	var card_2 = cards_player_2.shift();
	// 	var winner = war(card_1, card_2);
	// 	if (winner === "you win!") {
	// 		cards_player_1.push(card_1, card_2)
	// 	} else if 
	// }




	advance();
	
	$(".btn").click(function() {
		play();
	});
});
