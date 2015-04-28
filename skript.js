$(document).ready(function() {
    var x = 16*16;
    for(var i=0;i<x;i++){
        $("#innhold").append("<div></div>");
        
    }
    $("#innhold > div").hover(function() {
       $(this).addClass("hover");
    });
});