function search(form) {
  var topic = form.topic.value;
  location.assign('https://www.google.com.mx/search?q=' + topic);
}

document.querySelector('#topic').addEventListener('keypress', function keyupText(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    e.preventDefault();
    search(document.querySelector('form'));
  }
})
