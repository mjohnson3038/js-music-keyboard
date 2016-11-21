$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    // var text = $(this).html();
    // alert("Got a click on an <button> element! with text: " + text);
    var audio = new Audio('media/e_note.mp3');
    audio.play();
    var letter = $(this).html();
  });
//
//   var note = "#" + letter + "Audio";
    // var toPlay = $(this).html();
    var audio = new Audio('media/e_note.mp3');
    audio.play();

});


// $(document).ready( function() {
//   $('button').click(function(event) {
//     var audio = new Audio('media/e_note.mp3');
//     audio.play();
//     var text = $(this).html();
//     alert("Got a click on an <button> element! with text: " + text);
//   });
// });
