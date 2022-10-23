

const getUserChoice = userInput => { 					
  userInput = userInput.toLowerCase();					
  if (userInput === 'rock' || 'paper'|| 'scissors') {					
    return userInput;					
} else {					
      console.log('error message');					
    }					
};					
console.log(getUserChoice('Rocdkdkkk'));
				
  // userInput = userInput.toLowerCase();					
					
function getComputerChoice(){					
  					
  switch (Math.floor(Math.random()*3)) {					
  case 0:					
    return 'rock';					
  case 1:					
    return 'paper';					
    case 2:					
      return 'scissor';					
}};					
					
console.log(getComputerChoice())					
					
function determineWinner(userChoice, computerChoice) {					
					
  if (userChoice === computerChoice) {					
    return console.log('game is tie');					
} if (userchoice = 'bomb') {					
    return 'a bomb has been set off!'					
} if (userChoice === 'rock') {					
  if (computerChoice === 'paper') {					
  return console.log('computer won man');					
} else {					
    return console.log('you won');					
  }} if (userChoice === 'paper') {					
    if (computerChoice === 'scissor') {					
      return console.log('computer won');					
    } else {					
      return console.log('you won!');					
  }} if (userChoice === 'scissor') {					
    if (computerChoice === 'rock') {					
      return console.log('computer won');					
    } else {					
      return console.log('you won!');					
}}}					
					
determineWinner('paper', 'scissor')					
					
const playGame = () => {					
  const userChoice = getUserChoice('bomb');					  const computerChoice = getComputerChoice();					
   console.log('You threw: ' + userChoice);					
   console.log('The computer threw:' + computerChoice);					
   console.log(determineWinner(userChoice, computerChoice))					
};					

playGame()		
