function myFunc(from) {
  form.name.value;

}

var botton = document.querySelector('button');
botton.addEventListener('click', function() {
  if (botton.classList.contains('active')) {
    botton.classList.remove('active');
  }else {
    botton.classList.add('active');
  }
})



























// function cambiarPassword() {
//   var password = prompt('¿Cual es tu contraseña?');
//   var newPassword = "";
//
//   for(var i = 0; i < password.length; i++) {
//     if(password[i] == "a") {
//       newPassword = newPassword + "";
//     }else if (password[i] == "e") {
//       newPassword = newPassword + "";
//     }else if (password[i] == "i") {
//       newPassword = newPassword + "";
//     }else if (password[i] == "o") {
//       newPassword = newPassword + "";
//     }else if (password[i] == "u") {
//       newPassword = newPassword + "";
//     }else {
//       newPassword = newPassword + password[i];
//     }
//   }
//   console.log(newPassword);
// }
//
// document.querySelector('.palindrome').addEventListener('click', startPalindrome);
//
// function startPalindrome() {
//   var word = prompt('¿Ingresa una palabra para ver si es un Palindromo');
//
//   function palindrome(word) {
//     var newWord = word.toLowerCase();
//     newWord = newWord.replace(/\s/g, '');
//     for(var i = 1; i < newWord.length; i++) {
//       if (newWord[i - 1] != newWord[newWord.length - i]) {
//         document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" no es un palindromo :(';
//         return;
//       }
//     }
//     document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" es un paindromo!';
//   };
//   palindrome(word);
// }
//
// function startPalindromTwo() {
//   var word = prompt('¿Ingresa una palabra para ver si es un Palindromo');
//   var newWord = word.toLowerCase().replace(/\s/g, '');
//   newWord = newWord.split("").reverse();
//   if (word == newWord) {
//     document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" es un paindromo!';
//   } else {
//     document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" no es un palindromo :(';
//   }
// }
//
// function startPalindromTree() {
//   var word = prompt('¿Ingresa una palabra para ver si es un Palindromo');
//   word = word.toLowerCase().replace(/\s/g, '');
//   var newWord = '';
//   for (i = word.length-1; i >= 0; i--) {
//     newWord = newWord + word[i];
//   }
//   if (word == newWord) {
//     document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" es un paindromo!';
//   } else {
//     document.querySelector('.palindrome-phrase').innerHTML = '¡"' + word + '" no es un palindromo :(';
//   }
// }
//
// function pyramid(form) {
//   var floors = form.floorsInput.value
//   var legend = form.pyramidLegend.value
//   var space = '';
//   var bricks = '';
//   for(var i = 0; i < floors; i++) {
//     space = ' '.repeat(floors - i);
//     bricks = bricks + '*';
//     console.log(space + bricks + bricks);
//     var div = document.querySelector('.pyramid-div');
//     var pre = document.createElement('pre');
//     div.appendChild(pre);
//     pre.innerHTML = space + bricks + bricks;
//   }
//   console.log(legend);
// }
//
// function levelTitle() {
//   var level = parseInt(prompt('¿Que nivel eres?'));
//   if (level > 19) {
//     document.querySelector('.level-title').innerHTML = '¡Eres un nija!';
//     document.querySelector('.character-image').src = 'http://www.jumpninja.co.uk/wp-content/uploads/2017/06/NINJA-JUMPING2.png';
//   } else if (level <= 19 && level > 10) {
//     document.querySelector('.level-title').innerHTML = '¡Eres un acróbata!';
//     document.querySelector('.character-image').src = 'https://prod.media.larepublica.pe/720x405/larepublica/imagen/2017/10/02/noticia-acrobata-referencia.jpg';
//   } else {
//     document.querySelector('.level-title').innerHTML = '¡Eres un novato!';
//     document.querySelector('.character-image').src = 'http://www.tn8.tv/media/2015/11/gimnasta-nino-.jpg';
//   }
// }
//
// function fibonacci() {
//   var size = parseInt(prompt('Entonces... ¿que tanto quieres escucharme cantar?'));
//   var first = 0;
//   var second = 1;
//   var serie = [];
//   for( var i = 0; i < size; i++) {
//     serie.push(' ' + first);
//     second = first + second;
//     first = second - first;
//   }
//   document.querySelector('.fibo').innerHTML = serie;
// }
