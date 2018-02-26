function holaMundo() {
  console.log('¡hola mundo!')
}

function herencia(dineroJose, dineroJuan, herencia) {
  var mitadHerencia = herencia/2;
  dineroJose = dineroJose + mitadHerencia;
  dineroJuan = dineroJuan + mitadHerencia;
  dineroTotal = dineroJuan + dineroJose;
  document.getElementsByClassName('hola-mundo')[0].innerHTML = '$' + dineroTotal;

  console.log('mitadHerencia', mitadHerencia);
  console.log('dineroJose', dineroJose);
  console.log('dineroJuan', dineroJuan);
  console.log('dineroTotal', dineroTotal);
}

//herencia(100, 500, 2000);


function cuenta(numeroInicial, numeroFinal) {
  for(var i = numeroInicial; i <= numeroFinal; i++) {
    console.log(i);
  }
}

// cuenta(10,100);

document.querySelector('.new-function').addEventListener("click", tengoHambre);

function tengoHambre() {
  if(hambre <= 30){
    if(hambre <= 5) {
      console.log('Estoy Enojado');
    } else {
      console.log('Estoy Triste');
    }
  } else if(hambre > 80){
    console.log('Estoy Feliz!');
  } else {
    console.log('Medio tengo hambre');
  }
}

// tengoHambre(90);


var titulo = document.querySelector('h1');

titulo.innerHTML = "nuevo titulo";
