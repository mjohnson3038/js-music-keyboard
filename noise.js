$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var text = $(this).html();
    var audioId = text + "Audio";
    var audio = document.getElementById(audioId);
    audio.load();
    audio.play();
    console.log(audio);
  });


  // var audio = new Audio ("media/g_note.mp3")

  $(document).keydown(function(e) {
    console.log(e);
    var key = e.key;
    var audioId =  key + "Audio";
    var audio = document.getElementById(audioId);
    audio.load();
    audio.play();
    console.log(audio);
  });
});
