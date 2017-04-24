$(document).ready(function(){
    // jquery methods go here
    //  click method
    
    $("#click-function").click(function(){
        $(this).hide(3000);
    });

    $("#highlight").dblclick(function(){
        $(this).css("background-color","yellow");
    });
    /*
    $("#mouseover").mouseenter(function(){
        alert('Is that catnip?!');
    });
    
    $("#mousebegone").mouseleave(function(){
        alert('I will have you for breakfast...');
    });
    
    $("#mousedown").mousedown(function(){
        alert('Stop Mousing Around');
    });
    
    $("#hovering").mouseenter(function(){
        alert('Do not leave me please');
    });
    */
    
    //hide
    $("#hide").click(function(){
        $(".test").hide(1000);
    });
//show
    $("#show").click(function(){
        $(".test").show(1000);
    });
//toggle
    $("#toggle").click(function(){
        $(".test").toggle(1000);
    });
// fade in and out
    $("#fading").click(function(){
        $('#div1').fadeIn();
        $('#div2').fadeIn('slow');
        $('#div3').fadeIn(5000);
    });
    
// fade to
    $("#fadeto").click(function(){
        $('#div1').fadeTo("slow", 0.15);
        $('#div2').fadeTo("slow", 0.5);
        $('#div3').fadeTo("slow", 0.75);
    });
    
// slide toggle
    $("#flip").click(function(){
        $("#panel").slideToggle(function(){
        });
// Slide to
        $("#animate-btn").click(function(){
            $("#dancing-box").animate(function(){
                left:'50%'
                opacity '0.5'
                height: '150px'
            });
});