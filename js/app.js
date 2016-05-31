//Start attachments
window.onload = function() {

	var clickHome = document.querySelector('#logo');
	clickHome.onclick = function() {
		startHome();
	}

	var clickStart = document.querySelector('#start');
	clickStart.onclick = function() {
		startStart();
		clickStart.onclick = null;
	}

	var clickReset = document.querySelector('#reset');
	clickReset.onclick = function() {
		startReset();
	}

	var clickAbout = document.querySelector('#about');
	clickAbout.onclick = function() {
		startAbout();
		clickAbout.onclick = null;
	}
}

/////////////
//variables//
/////////////
var cardArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var arrayO = [];
var arrayX = [];

////////
//home//
////////

//Reloads page
function startHome() {
	document.location.reload(true);
}

/////////
//start//
/////////
//Attaches the user's click to the START GAME trigger
function startStart() {
	this.makeGameDiv();
	this.makeGameBoard();
	this.makeGameCards();
	this.startTicTacToe.start();
}

//Makes the GAME CONTAINER DIV
function makeGameDiv() {
	var findMainScreen = document.querySelector('.main-screen');

	var createGameDiv = document.createElement('div');
		createGameDiv.setAttribute('id', 'game-div');
		findMainScreen.appendChild(createGameDiv);
}

//Makes the GAME BOARD DIV
function makeGameBoard() {
	var findGameDiv = document.querySelector('#game-div');

	var createGameBoard = document.createElement('div');
		createGameBoard.setAttribute('id', 'game-board');
		findGameDiv.appendChild(createGameBoard);
}

//Makes the GAME CARDS
function makeGameCards() {
	var findGameBoard = document.querySelector('#game-board');
	findGameBoard.innerHTML = '';
	for (var i = 0; i < cardArray.length; i++) {
		var createGameCards = document.createElement('div');
			createGameCards.setAttribute('class', 'game-cards');
			createGameCards.setAttribute('id', cardArray[i]);
			createGameCards.setAttribute('data-card', cardArray[i]);
			findGameBoard.appendChild(createGameCards);
		}
}

//GAME START
var startTicTacToe = {

	turn: 0,

	start: function() {
		this.addClickCards();
	},

	//Initialize card classes
	addClickCards: function() {

		for (var i = 0; i < cardArray.length; i++) {
			var findCardDiv = document.getElementById(cardArray[i]);
			findCardDiv.onclick = function(event) {
				startTicTacToe.newGame(event.target);
				event.target.onclick = null;
			}
		}
		console.log(startTicTacToe.turn);
	},

	//Clicked card passes here and is checked for player
	newGame: function(cardThis) {
		if (startTicTacToe.turn === 0) {
		startTicTacToe.addClickCardDivO(cardThis);
		startTicTacToe.checkWin();
		} else {
			startTicTacToe.addClickCardDivX(cardThis);
			startTicTacToe.checkWin();
		}
	},

	//If player is O, does this
	addClickCardDivO: function(cardThisO) {
		var createO = document.createElement('div');

		createO.setAttribute('class', 'card-o');
		createO.setAttribute('onclick', null);
		cardThisO.appendChild(createO);

		arrayO.push(cardThisO.getAttribute('data-card'));
		startTicTacToe.turn = 1;
	},

	//If player is X, does this
	addClickCardDivX: function(cardThisX) {
	var createX = document.createElement('div');

		createX.setAttribute('class', 'card-x');
		createX.setAttribute('onclick', null);
		cardThisX.appendChild(createX);

		arrayX.push(cardThisX.getAttribute('data-card'));
		startTicTacToe.turn = 0;
	},

	checkWin: function() {
		arrayO.sort();
		arrayX.sort();
		console.log(arrayO);
		console.log(arrayX);
		if (
			(arrayO[0] === '1' && arrayO[1] === '2' && arrayO[2] === '3') ||
			(arrayO[0] === '1' && arrayO[1] === '4' && arrayO[2] === '7') ||
			(arrayO[0] === '1' && arrayO[1] === '5' && arrayO[2] === '9') ||
			(arrayO[0] === '3' && arrayO[1] === '6' && arrayO[2] === '9') ||
			(arrayO[0] === '3' && arrayO[1] === '5' && arrayO[2] === '7') ||
			(arrayO[0] === '4' && arrayO[1] === '5' && arrayO[2] === '6') ||
			(arrayO[0] === '7' && arrayO[1] === '8' && arrayO[2] === '9') ||
			(arrayO[0] === '2' && arrayO[1] === '5' && arrayO[2] === '8') ||
			(arrayO[1] === '1' && arrayO[2] === '2' && arrayO[3] === '3') ||
			(arrayO[1] === '1' && arrayO[2] === '4' && arrayO[3] === '7') ||
			(arrayO[1] === '1' && arrayO[2] === '5' && arrayO[3] === '9') ||
			(arrayO[1] === '3' && arrayO[2] === '6' && arrayO[3] === '9') ||
			(arrayO[1] === '3' && arrayO[2] === '5' && arrayO[3] === '7') ||
			(arrayO[1] === '4' && arrayO[2] === '5' && arrayO[3] === '6') ||
			(arrayO[1] === '7' && arrayO[2] === '8' && arrayO[3] === '9') ||
			(arrayO[1] === '2' && arrayO[2] === '5' && arrayO[3] === '8') ||
			(arrayO[0] === '1' && arrayO[2] === '4' && arrayO[3] === '7') ||
			(arrayO[0] === '2' && arrayO[2] === '5' && arrayO[3] === '8') ||
			(arrayO[0] === '3' && arrayO[2] === '6' && arrayO[3] === '9') ||
			(arrayO[0] === '1' && arrayO[2] === '5' && arrayO[3] === '9') ||
			(arrayO[0] === '1' && arrayO[2] === '5' && arrayO[4] === '9') ||
			(arrayO[0] === '1' && arrayO[2] === '4' && arrayO[4] === '7') ||
			(arrayO[0] === '3' && arrayO[1] === '5' && arrayO[3] === '7') 
			) {
			startTicTacToe.oWins();
		} else if (
			(arrayX[0] === '1' && arrayX[1] === '2' && arrayX[2] === '3') ||
			(arrayX[0] === '1' && arrayX[1] === '4' && arrayX[2] === '7') ||
			(arrayX[0] === '1' && arrayX[1] === '5' && arrayX[2] === '9') ||
			(arrayX[0] === '3' && arrayX[1] === '6' && arrayX[2] === '9') ||
			(arrayX[0] === '3' && arrayX[1] === '5' && arrayX[2] === '7') ||
			(arrayX[0] === '4' && arrayX[1] === '5' && arrayX[2] === '6') ||
			(arrayX[0] === '7' && arrayX[1] === '8' && arrayX[2] === '9') ||
			(arrayX[0] === '2' && arrayX[1] === '5' && arrayX[2] === '8') ||
			(arrayX[1] === '1' && arrayX[2] === '2' && arrayX[3] === '3') ||
			(arrayX[1] === '1' && arrayX[2] === '4' && arrayX[3] === '7') ||
			(arrayX[1] === '1' && arrayX[2] === '5' && arrayX[3] === '9') ||
			(arrayX[1] === '3' && arrayX[2] === '6' && arrayX[3] === '9') ||
			(arrayX[1] === '3' && arrayX[2] === '5' && arrayX[3] === '7') ||
			(arrayX[1] === '4' && arrayX[2] === '5' && arrayX[3] === '6') ||
			(arrayX[1] === '7' && arrayX[2] === '8' && arrayX[3] === '9') ||
			(arrayX[1] === '2' && arrayX[2] === '5' && arrayX[3] === '8') ||
			(arrayX[0] === '1' && arrayX[2] === '4' && arrayX[3] === '7') ||
			(arrayX[0] === '2' && arrayX[2] === '5' && arrayX[3] === '8') ||
			(arrayX[0] === '3' && arrayX[2] === '6' && arrayX[3] === '9') ||
			(arrayX[0] === '1' && arrayX[2] === '5' && arrayX[3] === '9') ||
			(arrayX[0] === '1' && arrayX[2] === '5' && arrayX[4] === '9') ||
			(arrayX[0] === '1' && arrayX[2] === '4' && arrayX[4] === '7') ||
			(arrayX[0] === '3' && arrayX[1] === '5' && arrayX[3] === '7') 
			) {
			startTicTacToe.xWins();
		} else if (arrayO.length === 5 && arrayX.length === 4) {
			startTicTacToe.tieGame();
		}

	},

	oWins: function() {
		var oWinsAlert = document.getElementById('game-board');
		oWinsAlert.innerHTML = 
		'<p>circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;<br>\
		circle wins; circle wins; circle wins; circle wins; circle wins;</p>';
	},

	xWins: function() {
		var xWinsAlert = document.getElementById('game-board');
		xWinsAlert.innerHTML = 
		'<p>square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;<br>\
		square wins; square wins; square wins; square wins; square wins;</p>';
	},

	tieGame: function() {
		var tieAlert = document.getElementById('game-board');
		tieAlert.innerHTML = 
		'<p>tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;<br>\
		tie; tie; tie; tie; tie;</p>'
	},

};


/////////
//reset//
/////////
function startReset() {
	document.location.reload(true);
};


/////////
//about//
/////////
function startAbout() {
	this.makeGameDiv();
	this.makeGameBoard();
	this.makeAbout();
};

function makeAbout() {
	var findGameAbout = document.querySelector('#game-board');

		findGameAbout.innerHTML = "<h1><span>tic.tac.toe;</span> is a 2 player browser game written in JavaScript.<br><br>traditionally making use of X's and O's, <span>tic.tac.toe;</span> uses circles and squares reflecting contemporary design paradigm.</h1><br><br><p>please enjoy responsibilly.</p>";
		console.log('only clicks once');
};
