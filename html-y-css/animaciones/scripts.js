var background = document.querySelector('body');
var goku = document.querySelector('.goku');
var gokuSSJ = document.querySelector('.goku-ssj');
var picture = document.querySelector('picture');

function superSajayin() {
  goku.style.display = "none";
  background.classList.add('flash');
  gokuSSJ.style.display = "block";
}

function normalSajayin() {
  gokuSSJ.style.display = "none";
  background.classList.remove('flash');
  goku.style.display = "block";
}

function moveLeft() {
  picture.style.left = "15%";
  picture.style.width = "250px";
  goku.src = "img/goku-fly.png";
  gokuSSJ.src = "img/goku-ssj-fly.png";
}

function moveCenter() {
  picture.style.left = "42%";
}

function moveRight() {
  picture.style.left = "70%";
  picture.style.transform = "scaleX(-1)";
  picture.style.width = "225px";
  goku.src = "img/goku-fly.png";
  gokuSSJ.src = "img/goku-ssj-fly.png";
}

picture.addEventListener("transitionend", function(event) {
  goku.src = "img/goku2.png"
  gokuSSJ.src = "img/goku-ssj.png";
  picture.style.width = "150px";
  picture.style.transform = "scaleX(1)";
}, false);
