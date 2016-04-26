$(document).ready(function(){

  // $("#justin").on("click", function(){
  //   $("#baby").toggleClass("hidden");
  //   var counter = parseInt($("#baby").find("#view-counter").text());
  //   counter++;
  //   $("#baby").find("#view-counter").text(counter);
  //   // $(#"come-and-get-it").toggleClass("hidden");
  //   // $(#"come-and-get-it").find("#view-counter").text(counter);
  // })

  toggleSong("#justin", "#baby")
  toggleSong("#miley", "#wrecking-ball")
  toggleSong("#selena", "#come-and-get-it")

  function toggleSong(artistID, songID){
    $(artistID).on("click", function(){
      $(songID).toggleClass("hidden");
      var counter = parseInt($(songID).find("#view-counter").text());
      counter++;
      $(songID).find("#view-counter").text(counter);
      $("#come-and-get-it").toggleClass("hidden");
      $("#come-and-get-it").find("#view-counter").text(counter);
    })
  }
  // colorizeSong("#baby")
  // colorizeSong("#wrecking-ball")
  // colorizeSong("#come-and-get-it")
  //
  // function colorizeSong(songID) {
  //   $(songID).find('#colorize').click(function() {
  //     $(songID).toggleClass('colorize');
  //   })
  // }


});
