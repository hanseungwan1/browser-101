const playBtn = document.querySelector(".play_stop_btn");
const mainContainner = document.querySelector(".main_containner");
const counter_box = document.querySelector(".counter");
const timer = document.querySelector(".timer");

let counter = 10;
let intervalId = null;
let timeg = 10;
let bugData = [];
let carrotData = [];
playBtn.addEventListener("click", handlePlayButtonClick);

const alert = new Audio();
const bg = new Audio();
const bug_pull = new Audio();
const carrot_pull = new Audio();
const game_win = new Audio();

alert.src = "./sound/alert.wav";
bg.src = "./sound/bg.mp3";
bug_pull.src = "./sound/bug_pull.mp3";
carrot_pull.src = "./sound/carrot_pull.mp3";
game_win.src = "./sound/game_win.mp3";

function createBug() {
  const bug = document.createElement("img");
  const carrot = document.createElement("img");
  bug.classList.add("bug_img");
  carrot.classList.add("carrot_img");
  bug.src = "./img/bug.png";
  carrot.src = "./img/carrot.png";
  bugData.push(bug);
  carrotData.push(carrot);
  bug.addEventListener("click", fail);
  carrot.addEventListener("click", clickCarrot);

  randomCoordinate(bug);
  randomCoordinate(carrot);
}

function clickCarrot(e) {
  carrot_pull.currentTime = 0;
  carrot_pull.play();
  counter--;
  counter_box.innerHTML = counter;
  e.target.remove(e.target);
  if (counter === 0) {
    bg.pause();
    game_win.play();
    clearInterval(intervalId);
    Modal("YOU WON");
  }
}

function randomCoordinate(element) {
  const top = parseInt(Math.random() * 100);
  const left = parseInt(Math.random() * 100);
  if (top > 90) element.style.top = `70%`;
  else element.style.top = `${top}%`;
  if (left > 90) element.style.left = `95%`;
  else element.style.left = `${left}%`;
  mainContainner.append(element);
}

function Modal(text) {
  playBtn.removeEventListener("click", handlePlayButtonClick);
  bugData.forEach((el) => el.removeEventListener("click", fail));
  carrotData.forEach((el) => el.removeEventListener("click", clickCarrot));
  const modalContainer = document.createElement("div");
  const replayBtn = document.createElement("button");
  const replyIcon = document.createElement("i");
  const resultText = document.createElement("span");

  modalContainer.classList.add("modal_containner");
  replayBtn.classList.add("btn", "replay_btn");
  replyIcon.classList.add("fa-solid", "fa-reply");
  resultText.classList.add("result_text");

  resultText.innerHTML = text;
  replayBtn.append(replyIcon);
  modalContainer.append(replayBtn, resultText);
  mainContainner.append(modalContainer);

  replayBtn.addEventListener("click", () => {
    if (text !== `REPLAY ?`) init();
    else {
      bugData.forEach((el) => el.addEventListener("click", fail));
      carrotData.forEach((el) => el.addEventListener("click", clickCarrot));
      playBtn.addEventListener("click", handlePlayButtonClick);
      timerstart(timeg);
      modalContainer.remove(modalContainer);
      playBtn.innerHTML = '<i class="fa-solid fa-stop"></i>';
      playBtn.classList.add("playing");
    }
  });
}

function fail() {
  bg.pause();
  bug_pull.play();
  if (intervalId) clearInterval(intervalId);
  Modal("YOU LOST");
}

function timerstart(time) {
  timer.innerHTML = `00:${time}`;
  intervalId = setInterval(() => {
    timeg--;
    time--;
    timer.innerHTML = `00:${time}`;
    if (time === 0) {
      fail();
      clearInterval(intervalId);
    }
  }, 1000);
}

function init() {
  bugData = [];
  carrotData = [];
  clearInterval(intervalId);
  playBtn.addEventListener("click", handlePlayButtonClick);
  mainContainner.innerHTML = ``;
  timer.innerHTML = `00:00`;
  counter_box.innerHTML = `0`;
  timeg = 10;
  counter = 10;
  intervalId = null;
  playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  playBtn.classList.remove("playing");
}

function handlePlayButtonClick() {
  if (playBtn.className === "btn play_stop_btn playing") {
    alert.play();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    playBtn.classList.remove("playing");
    clearInterval(intervalId);
    Modal("REPLAY ?");
  } else {
    bg.currentTime = 0;
    bg.play();
    timerstart(10);
    counter_box.innerHTML = counter;
    playBtn.innerHTML = '<i class="fa-solid fa-stop"></i>';
    playBtn.classList.add("playing");
    for (let i = 0; i < 10; i++) {
      createBug();
    }
  }
}
