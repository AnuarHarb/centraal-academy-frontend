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

function playLetter(letter) {
  for(var i = 0; i < word.length; i++) {
    if(letter == word[i]){
      console.log('Le atinaste a word en la posición ' + i)
    }
  }
}







// function playLetter(selectedLetter) {
//   for (var i = 0; i < word.length; i++) {
//     if (selectedLetter == word[i]) {
//       alert('le atinaste a la letra ' + i);
//     }
//   }
// }
