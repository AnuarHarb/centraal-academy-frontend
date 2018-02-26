function palindrome() {
  var word = prompt('Ingresa tu frase especial :D')
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  var newWord = word.split('').reverse().join('');

  if (word == newWord) {
    console.log('Tienes un palindromo!');
  } else {
    console.log('No es un palindomo');
  }
}

function palindrome2() {
  var word = prompt('Dime tu segunda frase');
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');
  var newWord = '';

  for(var i = word.length - 1; i >= 0; i--) {
    newWord = newWord + word[i];
  }

  if (word == newWord) {
    console.log("Tienes un palindromo");
  } else {
    console.log("No es un palindromo");
  }
}

function palindrome3() {
  var word = prompt('Escribe la última frase');
  word = word.toLowerCase();
  var newWord = '';

  for(var i = word.length - 1; i >= 0 ; i--) {
    if(word[i] == ' ') {
      newWord = newWord + '';
    } else if (word[i] == 'ó') {
      newWord = newWord + 'o';
    } else {
      newWord = newWord + word[i];
    }
  }
  
  if (newWord == word) {
    console.log('es palindromo');
  } else {
    console.log('no es palindromo');
  }
}

function palindrome4() {
  var word = prompt('Escribe la última frase');
  word = word.toLowerCase();
  word = word.replace(/\s/g, '');

  for( var i = 0; i < word.length; i++ ) {
    if (word[i] != word[(word.length-1) - i]) {
      console.log('no es palindromo');
      return word;
    }
    console.log(i);
  }
  console.log('Si es palindromo');
}
