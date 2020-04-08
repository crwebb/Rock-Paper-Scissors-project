// Global Variables
let roundCount = 1;
let computerScore = 0;
let playerScore = 0;
let drawnRounds = 0;
let gameWinner;
let computerSelect = computerPlay();


function computerPlay () {

    let possibleChoices = ['ROCK', 'PAPER', 'SCISSORS']; 
    let computerSelection = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

return computerSelection; 
};


function playRound (playerPlay) {

    let playerSelect = playerPlay;  

     computerSelect = computerPlay();
        console.log( "COMPUTER CHOSE", computerSelect);

    let roundResult = ""; 

        if (computerSelect === playerSelect) {
                roundResult = "Round is a Draw";

            }   else if (computerSelect === "ROCK" && playerSelect === "PAPER") {
                    roundResult = "Player Wins";

            }   else if (computerSelect === "PAPER" && playerSelect === "ROCK") {
                    roundResult = "Computer Wins";

            }   else if (computerSelect === "SCISSORS" && playerSelect === "ROCK") {
                    roundResult = "Player Wins";

            }   else if (computerSelect === "ROCK" && playerSelect === "SCISSORS") {
                    roundResult = "Computer Wins";

            }   else if (computerSelect === "PAPER" && playerSelect === "SCISSORS") {
                    roundResult = "Player Wins";

            }   else if (computerSelect === "SCISSORS" && playerSelect === "PAPER") {
                    roundResult = "Computer Wins";

            }   else {
                    console.log("Something isn't working quite right!");
        };

    console.log(roundResult);
    
return roundResult;     
};



// Event Listeners
const flexContainer = document.querySelector('.flex-container');

 const winningDiv = document.createElement('div')
 winningDiv.classList.add('winnerClass')


function roundEvents (e) {

        if (playerScore == 4) {
                gameWinner = "PLAYER";
                gameOver();
     
                
                } else if (computerScore == 4 ) {
                        gameWinner = "COMPUTER";
                        gameOver();

                } else if  (e == "Player Wins") {
                                document.querySelector("#roundWinner").textContent=`- PLAYER HAS WON THE ROUND ! -`;
                                document.querySelector("#pScore").textContent=`PLAYER SCORE: ${++playerScore}`;
                                document.querySelector("#compChose").textContent=`COMPUTER CHOSE: ${computerSelect}`;
                                document.querySelector("#rCount").textContent=`ROUNDS: ${roundCount++}`;
                                

                } else if (e == "Computer Wins") {
                                document.querySelector("#roundWinner").textContent=`- COMPUTER HAS WON THE ROUND ! -`;
                                document.querySelector("#compChose").textContent=`COMPUTER CHOSE: ${computerSelect}`;
                                document.querySelector("#cScore").textContent=`COMPUTER SCORE: ${++computerScore}`;
                                document.querySelector("#rCount").textContent=`ROUNDS: ${roundCount++}`;

                } else if (e == "Round is a Draw") {
                                document.querySelector("#roundWinner").textContent=`- ROUND WAS A DRAW ! -`;
                                document.querySelector("#compChose").textContent=`COMPUTER CHOSE: ${computerSelect}`;
                                document.querySelector("#rCount").textContent=`ROUNDS: ${roundCount++} `;
                                document.querySelector("#drawCount").textContent=`DRAWS: ${++drawnRounds}`;

                } else {
                        console.log("Something is Wrong");
        };
     
};
       
function gameOver() {

                document.querySelector("#roundWinner").textContent="";
                document.querySelector("#pScore").textContent="";
                document.querySelector("#cScore").textContent="";
                document.querySelector("#rCount").textContent="";
                document.querySelector("#rock").textContent="";
                document.querySelector("#paper").textContent=""; 
                document.querySelector("#scissors").textContent="";
                document.querySelector("#drawCount").textContent="";

                div1.removeChild(document.querySelector("#rock"));
                div1.removeChild(document.querySelector("#paper"));   
                div1.removeChild(document.querySelector("#scissors"));
                div2.removeChild(document.querySelector("#compChose"));

                flexContainer.appendChild(winningDiv);
                winningDiv.textContent = `THE ${gameWinner} SCORED 5 POINTS AND WON THE GAME !`
};

        
const playerRock = document.querySelector("#rock");
playerRock.addEventListener('click', () => {
    console.log("PLAYER CHOSE ROCK");
    roundEvents (playRound('ROCK'));
});

const playerPaper = document.querySelector("#paper");
playerPaper.addEventListener('click', () => {
    console.log("PLAYER CHOSE PAPER");
    roundEvents (playRound('PAPER'));
});


const playerScissors = document.querySelector("#scissors");
playerScissors.addEventListener('click', () => {
    console.log("PLAYER CHOSE SCISSORS");
    roundEvents (playRound('SCISSORS'));
});


