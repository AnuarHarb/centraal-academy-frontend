document.querySelector('#text').addEventListener('keypress', function keyupText(e) {
  var key = e.which || e.keyCode;
    if (key === 13) {
      e.preventDefault();
      readInput(document.querySelector('.form'));
    }
})

function readInput(form) {
  console.log(form.name1.value);
}

function readInput2(form) {
  console.log(form.gender.value);
}

function readInput3(form) {
  var vehicle1 = form.vehicle1.checked
  var vehicle2 = form.vehicle2.checked
  console.log('bike',vehicle1, 'car',vehicle2);
}

function readInput4(form) {
  console.log(form.bday.value);
}
