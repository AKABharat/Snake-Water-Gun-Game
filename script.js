

let ComputerScore = 0;
let UserScore = 0;

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    if (UserScore !== 5 && ComputerScore !== 5) {

      let finalComputer = pickComputerMove();  // function for computer move 
      let finalUser = button.textContent;

      document.querySelector(".status").innerHTML = "you chose ➡️ " + finalUser + " | computer chose ➡️ " + finalComputer;

      if ((finalComputer === "🐍" && finalUser === "🔫") || (finalComputer === "🔫" && finalUser === "💦") || (finalComputer === "💦" && finalUser === "🐍")) {
        UserScore++;
      }
      else if (finalComputer === finalUser) {
        document.querySelector(".status").innerHTML = "you chose ➡️ " + finalUser + " | computer chose ➡️ " + finalComputer + "<h2>Tie</h2>";
      }
      else {
        ComputerScore++;
      }
      document.querySelector(".ComputerScore").innerHTML = ComputerScore;
      document.querySelector(".UserScore").innerHTML = UserScore;
    }
    else {
      document.querySelector(".result").innerHTML = finalResult();
    }
  });

}
);


function pickComputerMove() {
  let arr = ["🐍", "💦", "🔫"];
  let ComputerChose = Math.round(Math.random() * 2);
  return arr[ComputerChose];
}
function finalResult() {
  let winner;
  if (ComputerScore > UserScore) {
    winner = "Computer";
  } else if (UserScore > ComputerScore) {
    winner = "User";
  } else {
    winner = "Tie";
  }
  return `Game over! The winner is ${winner}! 🎉`;

}

