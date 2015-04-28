$(document).ready(function() {
    var x = 32;
    var y = (500/x)-8;
    for(var i=0;i<x*x;i++){
        $("#innhold").append("<div></div>");
        
        
    }
    $("#innhold > div").css("width", y + "px");
    $("#innhold > div").css("height", y  + "px" );
    $("#innhold > div").hover(function() {
       $(this).addClass("hover");
    });
    
    
});

function reset() {
        $("div").removeClass("hover");
    };