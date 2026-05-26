const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

cells.forEach((cell,index)=>{

  cell.addEventListener("click",()=>{

    if(cell.innerHTML !== "" || !gameActive){
      return;
    }

    cell.innerHTML = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if(gameActive){
      statusText.innerHTML = `Player ${currentPlayer} Turn`;
    }

  });

});

function checkWinner(){

  let winner = false;

  winningConditions.forEach(condition=>{

    const [a,b,c] = condition;

    if(
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    ){
      winner = true;
    }

  });

  if(winner){

    statusText.innerHTML = `Player ${currentPlayer} Wins! 🎉`;

    gameActive = false;

    return;
  }

  let draw = true;

  cells.forEach(cell=>{

    if(cell.innerHTML === ""){
      draw = false;
    }

  });

  if(draw){

    statusText.innerHTML = "Game Draw!";

    gameActive = false;
  }

}

function restartGame(){

  cells.forEach(cell=>{

    cell.innerHTML = "";

  });

  currentPlayer = "X";
  gameActive = true;

  statusText.innerHTML = "Player X Turn";

}