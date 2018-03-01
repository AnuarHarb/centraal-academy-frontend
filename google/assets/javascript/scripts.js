function search(form) {
  var topic = form.searchInput.value;
  location.assign('https://www.google.com.mx/search?q=' + topic);
}

document.querySelector('#search-input').addEventListener('change', function() {
  console.log('cambio');
})
