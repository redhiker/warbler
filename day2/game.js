var rock = 'rock';
var scissors = 'scissors';
var paper = 'paper';

var validInput = false;
var human;

function domPrompt(msg) {
	var myNewElement = document.createElement('div');
	myNewElement.innerHTML = msg;
	
	
	
	document.body.appendChild(myNewElement);
}



function domAlert(msg) {
	var myNewElement = document.createElement('div');
	myNewElement.innerHTML = msg;
	myNewElement.setAttribute('class','alert_class');
	document.body.appendChild(myNewElement);
}



var input = document.getElementById('promptInput');

promptInput.onkeydown = function(evt) {
	if (evt.key === 'Enter') {
		human = document.getElementById('promptInput').value;
		
		if ( human === 'rock' || human === 'paper' || human === 'scissors' ) {
		
			computeWinner(human);
		}
	};
};



do {
	domPrompt("Enter rock, paper, or scissors:");
	
} while ( human === 'rock' || human === 'paper' || human === 'scissors' )
	

function computeWinner(human) {
	var computer = Math.floor(Math.random() * 3);

	if ( computer === 0 ) {
		computer = rock;
	} else if ( computer === 1 ) {
		computer = paper;
	} else {
		computer = scissors;
	};

	domAlert(human + "..." + computer);

	if ( (human === 'rock') && (computer === 'paper') ) 
	{
		domAlert("Sorry: paper covers rock");
	} 
	else if ( (human === 'rock') && (computer === 'scissors') ) 
	{
		domAlert("You won: rock crushes scissors");
	} 
	else if ( (human === 'scissors') && (computer === 'rock') ) 
	{
		domAlert("Sorry: rock crushes scissors");
	} 
	else if ( (human === 'scissors') && (computer === 'paper') ) 
	{
		domAlert("You won: scissors cut paper");
	} 
	else if ( (human === 'paper') && (computer === 'scissors') ) 
	{
		domAlert("Sorry: scissors cut paper");
	} 
	else if ( (human === 'paper') && (computer === 'rock') ) {
		domAlert("You won: paper coveres rock");
	} 
	else 
	{
		domAlert("tie: both players picked " + computer);
	}
}
