'use strict';
var word = ['H','O','L','A','O'];

function compareLetter(letter) {
  var selectedLetter = letter.value;
  playLetter(selectedLetter);
}

document.addEventListener('keydown', function getKeyLetter(event) {
  var keyLetter = event.key;
  var selectedLetter = keyLetter.toUpperCase();
  playLetter(selectedLetter);
});

function playLetter(selectedLetter) {
  for (var i = 0; i < word.length; i++) {
    if (selectedLetter == word[i]) {
      alert('le atinaste a la letra ' + i);
    }
  }
}

function startGame() {
  var showWord = document.querySelector('.show-word');
  for(var i = 0; i < word.length; i++){
    var space = document.createElement('span');
    var hiddenLetter = document.createTextNode('_');
    space.appendChild(hiddenLetter);
    showWord.appendChild(space);
  }
}
