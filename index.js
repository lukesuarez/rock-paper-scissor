function playGame(){

function getComputerChoice() {
  let randomChoices = Math.floor(Math.random() * 3)
  // console.log(randomChoices)
  if(randomChoices === 0 ) {
    return 'rock'
  } else if (randomChoices === 1 ) {
    return 'paper'
  } else if (randomChoices === 2 ){
    return 'scissors'
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Hello! Please enter the following options: Rock or Paper or Scissors')
  if(humanChoice === 'rock' || 'paper' || 'scissors') {
    humanChoice = humanChoice.toLowerCase()
  } 
  return humanChoice;
}

    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === computerChoice){
      console.log('DRAW! You selected the same option as the opponent!')
      humanScore++
      computerScore++ 
      console.log('----------------')
      } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') ||  (humanChoice === 'scissor' && computerChoice === 'paper' )) {
        console.log(`You WIN! ${humanChoice} beats ${computerChoice}! `)
        console.log('----------------')
        humanScore++
      } else {
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}! `)
        console.log('----------------')
        computerScore++
      }
    }


  for (let i = 1; i <=5 ; i++) {
    let humanSelection = getHumanChoice()
    let computerSelection = getComputerChoice();
    console.log('Player CHOICE: '+ humanSelection)
    console.log('Computer CHOICE: '+computerSelection)
    console.log(`Game round: ${i}`)
    playRound(humanSelection,computerSelection)
  }
  if ( humanScore > computerScore) {
    console.log('You win the game! Congratulations!')
  } else if ( computerScore > humanScore ) {
    console.log('You lose the game! try again!')
  }else if (computerScore === humanScore) {
    console.log('Draw! Please refresh page(F5) and try again')
  }
}

playGame()