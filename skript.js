var x = 16;

function reset() {
    //$("div").removeClass("hover");
   
    };

$(document).ready(function() {
    
    $("#button").click(function() {
        var x = prompt("Skriv inn størrelse på ramme i antall bokser  (f.eks 16 vil gi en box med 16x16) (minimum 16)")
        $("#innhold").empty();
        
        if(x<16) {x = 16};
        
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
    
    
    var y = (500/x)-8;
    
    //if(x<16) {x = 16};
    
    
    for(var i=0;i<x*x;i++){
        $("#innhold").append("<div></div>");
        
        
    }
    $("#innhold > div").css("width", y + "px");
    $("#innhold > div").css("height", y  + "px" );
    $("#innhold > div").hover(function() {
       $(this).addClass("hover");
    });
       
});

