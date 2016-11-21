$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var text = $(this).html();
    var note = "media/" + text + "_note.mp3";
    var audio = new Audio(note);
    audio.play();
  });


  $('.instrument').keydown(function(e) {
    var key = e.key;
    var note = "media/" + key + "_note.mp3";
    var audio = new Audio(note);
    audio.play();
  });
});
