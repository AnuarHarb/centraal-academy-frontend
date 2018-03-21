'use strict';
var word = ['H','O','L','A'];

function playLetter(selectedLetter) {
  if (selectedLetter == word[0]) {
    alert('le atinaste a la primera letra');
  } else {
    alert('nel');
  }
}

function compareLetter(letter) {
  var selectedLetter = letter.value;
  playLetter(selectedLetter);
}

document.addEventListener('keydown', function getKeyLetter(event) {
  var keyLetter = event.key;
  var selectedLetter = keyLetter.toUpperCase();
  playLetter(selectedLetter);
})
