$(function(){
  var $title = $(".title")
  $title.on( "focusout", function(event){
    $title.text("Where are you?");
  });
});
