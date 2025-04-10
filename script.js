console.log("Welcome to Tic Tac Toe");


let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxes = document.getElementsByClassName("boxtext");
  let Wins = [
    [0, 1, 2, 0, 5, 0], 
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0], 
    [0, 3, 6, -10, 15, 90], 
    [1, 4, 7, 0, 15, 90], 
    [2, 5, 8, 10, 15, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, -45],
  ];

  Wins.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[1]].innerText === boxes[e[2]].innerText &&
      boxes[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxes[e[0]].innerText + " Won!";
      isGameOver = true;
      gameover.play();

      document.querySelector(".igmbox").style.width = "200px";

      const line = document.querySelector(".line");
      line.style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      line.style.width = "30vw";
    }
  });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "" && !isGameOver) {
      boxtext.innerText = turn;
      turn = changeTurn();
      Audioturn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((boxtext) => {
    boxtext.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.querySelector(".igmbox").style.width = "0"; 
  document.querySelector(".line").style.width = "0"; 
});