var rock = 'rock';
var scissors = 'scissors';
var paper = 'paper';

do {
	var human = prompt("Enter rock, paper, or scissors:");
} while ( human != 'rock' && human != 'paper' && human != 'scissors' )


var computer = Math.floor(Math.random() * 3);

if ( computer === 0 ) {
	computer = rock;
} else if ( computer === 1 ) {
	computer = paper;
} else {
	computer = scissors;
};

alert(human + "..." + computer);

if ( (human === 'rock') && (computer === 'paper') ) 
{
	alert("Sorry: paper covers rock");
} 
else if ( (human === 'rock') && (computer === 'scissors') ) 
{
	alert("You won: rock crushes scissors");
} 
else if ( (human === 'scissors') && (computer === 'rock') ) 
{
	alert("Sorry: rock crushes scissors");
} 
else if ( (human === 'scissors') && (computer === 'paper') ) 
{
	alert("You won: scissors cut paper");
} 
else if ( (human === 'paper') && (computer === 'scissors') ) 
{
	alert("Sorry: scissors cut paper");
} 
else if ( (human === 'paper') && (computer === 'rock') ) {
	alert("You won: paper coveres rock");
} 
else 
{
	alert("tie: both players picked " + computer);
}
