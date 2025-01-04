let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");


const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
  //rock, paper, scissors
};

const drawGame = () => {
  msg.innerText = "Game was Draw. paly again/";
  msg.style.backgroundColor="#081b31";

};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
 userScore++;
userScorePara.innerText=userScore;
    msg.innerText = `You win! Your. ${userChoice}bets ${compChoice}`;
    msg.style.backgroundColor="green";

  } else {
 compScore++;
 compscorePara.innerText=compScore
    msg.innerText = `You Lose. ${compChoice}bets your ${userChoice}`;;
    msg.style.backgroundColor="Red";

  }
};

const palyGame = (userChoice) => {
  //generate computer choice-> modular
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    palyGame(userChoice);
  });
});
