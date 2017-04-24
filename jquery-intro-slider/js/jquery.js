$(document).ready(function(){
    // jquery methods go here
    // click method
    $("#click-function").click(function(){
        $(this).hide(3000);// pass a value for time to hide
    });
    
    $("#highlight").dblclick(function(){
        $(this).css("background-color","yellow");
    });
    // single line comment
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
    
    $("#hovering").hover(function(){
       alert("Don't leave me please"); 
    },
       function(){
        alert("Pet me please"); 
    });
    */
    
    // hide
    $("#hide").click(function(){
        $(".test").hide(1000);
    });
    
    // show
    $("#show").click(function(){
        $(".test").show(1000);
    });
    
    // toggle
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
        $('#div4').fadeTo("slow",0.15);
        $('#div5').fadeTo("slow",0.5);
        $('#div6').fadeTo("slow",0.75);
    });
    
    // slide toggle
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    
    // slide to
    $("#animate-btn").click(function(){
        $("#dancing-box").animate({
            left: '50%',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
    
    // chaining 
    /*
    $('#chaining').click(function(){
        $('#fun-jQuery').css("color", "#3bb6c6").slideUp(2000).slideDown(2000);
    });
    
    */
    
    $('#chaining').click(function(){
        $('#fun-jQuery').css("color", "#3bb6c6")
            .slideUp(2000)
            .slideDown(2000);
    });
});








