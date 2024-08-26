
const choices = ['rock','paper','scissors']
const playerChoiceDisplay = document.querySelector("#playerChoiceDisplay");
const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
const resultDisplay = document.querySelector('#resultDisplay')

const playerScore = document.querySelector('#playerScore')
const computerScore = document.querySelector('#computerScore')
const roundDisplay = document.querySelector('#gameRound')

let computerChoice = choices[Math.floor(Math.random()* 3)]

let playerResult = 0;
let computerResult = 0;

function playRound(playerChoice) {

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
    
    if(playerChoice === computerChoice){
        resultDisplay.textContent = 'DRAW! You selected the same option as the opponent! 😶'
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || 
        (playerChoice === 'paper' && computerChoice === 'rock') ||  
        (playerChoice === 'scissor' && computerChoice === 'paper' )) {
          resultDisplay.textContent = `You WIN! ${playerChoice} beats ${computerChoice}! 😁`
          playerResult++
          playerScore.textContent = `${playerResult}`
          computerScore.textContent = `${computerResult}`
      } else {
          resultDisplay.textContent = `You Lose! ${computerChoice} beats ${playerChoice}! 😖`
          computerResult++
          playerScore.textContent = `${playerResult}`
          computerScore.textContent = `${computerResult}`
      }

      if( playerResult === 5) {
        resultDisplay.textContent = `Congratulations! You win the Round! 😁`
        let playerResult = 0;
        let computerResult = 0;
      } else if( computerResult === 5) {
        resultDisplay.textContent = `Computer wins the Round! 😖 Try again `
        let playerResult = 0;
        let computerResult = 0;
      }

    }
