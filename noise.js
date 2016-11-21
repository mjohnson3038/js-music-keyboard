$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var text = $(this).html();
    var note = "media/" + text + "_note.mp3";
    var audioId = text + "Audio";
    var audio = document.getElementById(audioId);
    audio.load();
    audio.play();
    console.log(audio);
  });


  $('.instrument').keydown(function(e) {
    var key = e.key;
    var audioId =  key + "Audio";
    var audio = document.getElementById(audioId);
    audio.play();
    audio.load();
    audio.play();
    console.log(audio);
  });
});
