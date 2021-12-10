/* 
  Store correct answers
  - When quiz begins, no answers are correct
*/

alert("Welcome to my little quiz. Complete 5 questions to earn crowns!");
alert("Each correct answer earns you a crown.");
alert("Earning all 5 crowns means you have my respect, which is worth nothing but I think you're cooler for earning it.");
let correctguess = 0;

// Store the rank of a player
let rank;

const main = document.querySelector('main');

const answerone = prompt("What is Luke Skywalker's father's name?");
if ( answerone === 'Vader' || answerone === 'vader' || answerone === 'Darth Vader' || answerone === 'darth vader' || answerone === 'Anakin' || answerone === 'anakin' || answerone === 'Anakin Skywalker' || answerone === 'anakin skywalker') {
  alert("That's correct!");
  correctguess += 1;
} else {
  alert("Sorry, better luck next time!");
}

const answertwo = prompt("What race is Gimli from Lord of the Rings?");
if ( answertwo === 'Dwarf' || answertwo === 'dwarf') {
  alert("That's correct!");
  correctguess += 1;
} else {
  alert("Sorry, but good try!");
}

const answerthree = prompt("What is Steve Rogers' superhero name?");
if ( answerthree === 'Captain America' || answerthree === 'captain america' || answerthree === 'Cap' || answerthree === 'cap' || answerthree === 'Cpt America' || answerthree === 'cpt america' || answerthree === 'Capt America' || answerthree === 'capt america') {
  alert("That's correct!");
    correctguess += 1;
} else {
  alert("If only you had a dime for every wrong answer.");
}

const answerfour = prompt("What animal is the mascot of Pittsburgh's hockey team?");
if ( answerfour === 'Penguin' || answerfour === 'penguin' || answerfour === 'Penguins' || answerfour === 'penguins') {
  alert("That's correct!");
    correctguess += 1;
} else {
  alert("Oof. Sorry, you are incorrect.");
}

const answerfive = prompt("Who is the current President of the United States?");
if ( answerfive === 'Biden' || answerfive === 'biden' || answerfive === 'Joe Biden' || answerfive === 'joe biden') {
  alert("That's correct! If you had put Trump, I would have questioned your sanity.");
    correctguess += 1;
} else if ( answerfive === 'Trump' || answerfive === 'trump' || answerfive === 'Donald Trump' || answerfive === 'donald trump') {
  alert("Seriously? Perhaps foxnews.com is better suited for you. Also, your neighbors might be lizard people and the only way to not be abducted by them is to get the COVID vaccine!");
} else {
  alert("Nice effort, but that was incorrect.");
}

/*
  Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctguess === 5 ) {
  rank = "Gold";
} else if ( correctguess >= 3 ) {
  rank = "Silver";
} else if ( correctguess >= 1 ) {
  rank = "Bronze";
} else {
  rank = "`You get nothing! You lose! Good DAY, sir (or ma'am or they)!`";
}


// Output results to the <main> element
main.innerHTML = `<h2>Your score = ${correctguess}.</h2></br></br><h1>You earned the ${rank} crown!</h1>`
