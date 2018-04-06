const xWing = document.querySelector('.x-wing');
const laser = document.querySelector('.laser');
xWing.addEventListener('click', function() {
  laser.classList.add('shoot');
})
laser.addEventListener('animationend', function() {
  laser.classList.remove('shoot');
})
