const count = (document.getElementById("counter"));
let pandar = 0;
let dark = false;
let starting = true;
let target = false;
let interval = false;
const more = document.getElementById("more");
const link = document.querySelector("link");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

const maximum = document. getElementById("maximum");
const max = document.getElementById("max");
let maximumm = Number(max.value);
max.addEventListener("input", () => {
  maximumm = Number(max.value);
  maximum.innerText = maximumm;
});

const stepValue = document.getElementById("stepValue");
const stepLabel = document.getElementById("stepLabel");
const sliding = document.getElementById("sliding");
let step = 1;
sliding.addEventListener("input",stepp);

const speed = document. getElementById("speed");
const aim = document.getElementById("aim");
const gap = document.getElementById("gap");

function stepp() {
  if (!interval) {
    step = 1;
  } else if (Number(sliding.value) >= 0) {
    step = Number(sliding.value) + 1;
  } else {
    step = Number(sliding.value);
  }
  stepValue.innerText = step;
  stepLabel.innerText = step;
}

function nash() {
  pandar += step;
  count.innerText = pandar;
  go();
}

function go() {
  if (pandar == maximumm && target) {
    count.style.background = "green";
  } else if (Math.abs(pandar) > maximumm && target) {
    count.style.background = "hwb(0, 10%, 0)";
  } else {
    count.style.background = "navajowhite";
  }
}

function restart() {
  pandar = 0;
  count.innerText = pandar;
  go();
}

function darkMode() {
  if (!dark) {
  link.href = "ClickerDark.css";
  more.innerText = "dark_mode";
    dark = true;
  } else {
    link.href = "ClickerStyle.css";
    more.innerText = "light_mode";
    dark = false;
  }
}

function moree() {
  sideMenu.style.display = "block";
  overlay.style.display = "block";
  sideMenu.style.animation = "slideInLeft 0.1s ease-out forwards";
  overlay.style.animation = "fadeIn 0.1s ease-in forwards"
}

function closeMenu() {
  if (maximumm == 0 && target) {
    alert("Enter target number");
  } else {
    sideMenu.style.animation = "slideOutLeft 0.1s ease-in forwards"
    overlay.style.animation = "fadeOut 0.1s ease-in forwards"
      setTimeout(() => {
      sideMenu.style.display = "none";
      overlay.style.display = "none";
      }, 100)
  go();
  }
}

function targett() {
  if (!target) {
    maximum.style.display = "inline-block";
    aim.style.background = "rgb(150, 75, 140)";
    aim.style.color = "white";
    target = true;
  } else {
    maximum.style.display = "none";
    aim.style.background = "#f0f0f0" ;
    aim.style.color = "black";
    target = false;
  }
}

function intervall() {
  if (!interval) {
    stepValue.style.display = "inline-block";
    stepLabel.style.display = "inline";
    gap.style.background = "rgb(150, 75, 140)";
    gap.style.color = "white";
    stepp();
    interval = true;
  } else {
    stepValue.style.display = "none";
    stepLabel.style.display = "none";
    gap.style.background = "#f0f0f0";
    gap.style.color = "black";
    interval = false;
  }}

function fast() {
  speed.style.background = "#f0f0f0";
  alert("Not yet ready, Work in progress");
}