// Button interaction
$('button').on('mousedown', function() {
  $('button').css('margin-top', '3px');
});

$('button').on('mouseup', function() {
  $('button').css('margin-top', '0');
});


// Smooth scroll to a section
$('.nav-link').on('click', function(event) {
  var target = event.currentTarget.getAttribute('data-target');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 400)
});

// Modal interaction
// Open Modal
$('.modal-button').on('click', function(event) {
  $('.custom-modal').removeClass('not-showing');
  $('.custom-modal-card').hide();
  if($(event.currentTarget).hasClass('skill1-button') == true) {
    $('.skill1-modal').show();
  } else if ($(event.currentTarget).hasClass('skill2-button') == true){
    $('.skill2-modal').show();
  } else {
    $('.skill3-modal').show();
  }
});

// Close modal
$('.modal-background, .close-modal i').on('click', function() {
  $('.custom-modal').addClass('not-showing');
});


//
$('.show-magic-box').on('mouseover', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).addClass('magic-box-active');
})

$('.show-magic-box').on('mouseleave', function(event) {
  var target = event.currentTarget.getAttribute('data-active-box');
  $('.' + target).removeClass('magic-box-active');
})
