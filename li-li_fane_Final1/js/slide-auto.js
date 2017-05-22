$(document).ready(function(){
    
    function autoPlay(){
        
        var currentActiveImg = $(".img-show");
        var nextActiveImg = currentActiveImg.next();
        
        if (nextActiveImg.length == 0){
            nextActiveImg = $(".carousel-inner img").first();
        }
        
        currentActiveImg.removeClass("img-show").addClass("img-hide").css("z-index", -10);
        
        nextActiveImg.addClass("img-show").removeClass("img-hide").css("z-index", 20);
        
        $(".carousel-inner img").not([currentActiveImg, nextActiveImg]).css("z-index", 1);
    
    }
    
    $(".next").on("click", function(){
        
        autoPlay();
        
    });
    
    $(".previous").on("click", function(){
        var currentActiveImg = $(".img-show");
        var nextActiveImg = currentActiveImg.prev();
        
        if (nextActiveImg.length == 0){
            nextActiveImg = $(".carousel-inner img").last();
        }
        
        currentActiveImg.removeClass("img-show").addClass("img-hide").css("z-index", -10);
        
        nextActiveImg.addClass("img-show").removeClass("img-hide").css("z-index", 20);
        
        $(".carousel-inner img").not([currentActiveImg, nextActiveImg]).css("z-index", 1);
        
    });
    
    setInterval(autoPlay,3000);
    
    //play and pause
    
    $("#pp").click (function(){
        
    });
    
});