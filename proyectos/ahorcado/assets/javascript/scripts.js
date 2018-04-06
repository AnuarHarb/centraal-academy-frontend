'use strict';

// Dom elements
const keyboard = document.querySelector('.keyboard');
const errorsText = document.querySelector('.errors');
const aciertosText = document.querySelector('.aciertos');
const resetButton = document.querySelector('.reset');
const showWord = document.querySelector('.show-word');
const startButton = document.querySelector('.start-button');
const letterBox = document.getElementsByClassName('letter-box');


const wordList = [
  'Palabra',
  'arbol',
  'aguacate',
  'OlaKeAce'
]

var word = [];

// Estado del juego
var state = {
  'aciertos': 0,
  'errors': 0
}

// Maneja el teclado de botones (En pantalla)
function compareLetter(letter) {
  var selectedLetter = letter.value;
  playLetter(selectedLetter);
}
// Escuchar para que se pueda utilizar el teclado
document.addEventListener('keydown', function getKeyLetter(event) {
  var keyLetter = event.key;
  var selectedLetter = keyLetter.toUpperCase();
  playLetter(selectedLetter);
});

// Toma la letra seleccionada y la compara con las letras de la palabra para decidir si fue una jugada correcta o un error
function playLetter(selectedLetter) {
  var isMistake = true;
  for (var i = 0; i < word.length; i++) {
    if (selectedLetter == word[i]) {
      isMistake = false;
      showLetter(i, selectedLetter);
      state.aciertos = state.aciertos + 1;
    }
  }
  // Resvisa si la bandera isMistake quedo como positiva o negativa para saber is fue un error o no
  if (isMistake == true) {
    state.errors = state.errors + 1;
    errorsText.innerHTML = state.errors;
    errorHandler();
  } else {
    aciertosText.innerHTML = state.aciertos;
    aciertosHandler();
  }
}

// Inicia el juego y pinta la palabra para que el jugador sepa de cuantas letras es
function startGame() {
  keyboard.style.display = 'block';
  startButton.innerHTML = 'reiniciar';
  reset();
  pickWord();
  for(var i = 0; i < word.length; i++){
    var space = document.createElement('span');
    space.classList.add('letter-box');
    var hiddenLetter = document.createTextNode('_');
    space.appendChild(hiddenLetter);
    showWord.appendChild(space);
  }
}

// Pinta la letra correcta en la pocisión correspondiente cuando hay un acierto
function showLetter(position, selectedLetter) {
  letterBox[position].innerHTML = selectedLetter
}

// Maneja los errores para saber si perdiste o iniciar alguna acción
function errorHandler() {
  if(state.errors == 1) {
    alert('Primer error');
  } else if(state.errors == 2) {
    alert('Segundo Error');
  } else {
    alert('Perdiste, existe Master Card');
  }
}

function aciertosHandler() {
  if( state.aciertos == word.length ) {
    console.log('ganaste');
    resetButton.style.display = 'block';
    keyboard.style.display = 'none';
  }
}

function reset() {
  state.errors = 0;
  state.aciertos = 0;
  showWord.innerHTML = '';
  errorsText.innerHTML = state.errors;
  aciertosText.innerHTML = state.aciertos;
  resetButton.style.display = 'none';
}

function pickWord() {
  var random = Math.floor(Math.random() * wordList.length);
  word = wordList[random];
  word = word.toUpperCase();
}
