//variables for the game scoring
const win = document.getElementById('wins');
const lose = document.getElementById('losses');
const draw = document.getElementById('draws');

//variables for the hands thrown
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

//the selection of the above variables 
const gameOptions = document.querySelectorAll('.choices div');

//shows what the user and AI choose to play
const userShow = document.querySelector('image playerChoice');
const aiShow = document.querySelector('image aiChoice');

let wins = 1;
let loses = 1;
let draws = 1;

const getPlayerChoice = (choice) => {
    if(choice === 'rock' || 'paper' || 'scissors'){
        return choice;
    }
}
