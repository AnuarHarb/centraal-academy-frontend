'use strict';
var word = ['H','O','L','A','O'];

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
  var errorsText = document.querySelector('.errors');
  var aciertosText = document.querySelector('.aciertos');
  var isMistake = true;
  for (var i = 0; i < word.length; i++) {
    if (selectedLetter == word[i]) {
      isMistake = false;
      showLetter(i, selectedLetter);
    }
  }
  // Resvisa si la bandera isMistake quedo como positiva o negativa para saber is fue un error o no
  if (isMistake == true) {
    state.errors = state.errors + 1;
    errorsText.innerHTML = state.errors;
    errorHandler();
  } else {
    state.aciertos = state.aciertos + 1;
    aciertosText.innerHTML = state.aciertos;
  }
}

// Inicia el juego y pinta la palabra para que el jugador sepa de cuantas letras es
function startGame() {
  var showWord = document.querySelector('.show-word');
  var keyboard = document.querySelector('.keyboard');
  keyboard.style.display = 'block';
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
  var letterBox = document.getElementsByClassName('letter-box');
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
