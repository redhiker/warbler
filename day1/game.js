var rock = 'rock';
var scissors = 'scissors';
var paper = 'paper';


var userSelection = prompt("enter rock, paper, or scissors");


var xyz;

if ( userSelection === rock ) {
	xyz = 0;
} else if ( userSelection === paper ) {
	xyz = 1;
} else {
	xyz = 2;
};

var computer = Math.floor(Math.random() * 3);

var xyz2;

if ( computer === 0 ) {
	xyz2 = rock;
} else if ( computer === 1 ) {
	xyz2 = paper;
} else {
	xyz2 = scissors;
};

alert(userSelection + "..." + xyz2);

if ( (userSelection === 'rock') && (xyz2 === 'paper') ) 
{
	alert("Sorry: paper covers rock");
} 
else if ( (userSelection === 'rock') && (xyz2 === 'scissors') ) 
{
	alert("You won: rock crushes scissors");
} 
else if ( (userSelection === 'scissors') && (xyz2 === 'rock') ) 
{
	alert("Sorry: rock crushes scissors");
} 
else if ( (userSelection === 'scissors') && (xyz2 === 'paper') ) 
{
	alert("You won: scissors cut paper");
} 
else if ( (userSelection === 'paper') && (xyz2 === 'scissors') ) 
{
	alert("Sorry: scissors cut paper");
} 
else if ( (userSelection === 'paper') && (xyz2 === 'rock') ) {
	alert("You won: paper coveres rock");
} 
else 
{
	alert("tie");
}
