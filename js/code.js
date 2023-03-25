
$(document).ready(function(){
   
   $("#menu").click(function(){
    $("#nav").toggle(1000);
});

$( window ).resize(function() {
    if($( window ).width()>800){
        $(".menu_mobile").hide();
    }
  });
});
