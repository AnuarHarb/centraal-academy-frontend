// Button interaction
$('button').on('mousedown', function() {
  $('button').css('margin-top', '3px');
});

$('button').on('mouseup', function() {
  $('button').css('margin-top', '0');
});

// Modal interaction
// Open Modal
$('.modal-button').on('click', function(event) {
  $('.custom-modal').removeClass('not-showing');
  if($(event.currentTarget).hasClass('skill1-button') == true) {
    $('.skill2-modal').hide();
    $('.skill1-modal').show();
  } else {
    $('.skill2-modal').show();
    $('.skill1-modal').hide();
  }
});

// Close modal
$('.modal-background, .close-modal i').on('click', function() {
  $('.custom-modal').addClass('not-showing');
});
