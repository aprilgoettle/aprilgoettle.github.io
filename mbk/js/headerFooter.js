var lastPositionAtTop = true;

$(window).scroll(function(){
    if(lastPositionAtTop){ 
        if($(window).scrollTop() > 20){ 
            lastPositionAtTop = false; 
            $("#navbar, #navpadding").stop(true).animate({ 
                opacity: 0.9,  
                height: "10vh",
                fontSize: "2vh",
                borderWidth: 0,
                lineHeight: "10vh",
            }, 500);

            $("#navlogo").stop(true).animate({
                height: "9vh",
                top: ".5vh",
            }, 500);

            if($("#navIcon").is(":visible")){
                $("#navIcon").stop(true).animate({
                    height: "5vh",
                    marginTop: "1vh",
                }, 500);
            }
            
            $("#mobilenav").css({
                top: "7vh"
            });
        }
    }else{ 
        if($(window).scrollTop() <= 20){ 
            lastPositionAtTop = true; 
            $("#navbar, #navpadding").stop(true).animate({ 
                opacity: 1,
                height: "25vh",
                borderBottomWidth: "1.5vh",
                borderTopWidth: "1.5vh",
                fontSize: "3.5vh",
                lineHeight: "22vh",
            }, 500);

            $("#navlogo").stop(true).animate({
                height: "21vh",
                top: "2vh",
            }, 500);

            if($("#navIcon").is(":visible")){
                $("#navIcon").stop(true).animate({
                    height: "8vh",
                    marginTop: "4.75vh",
                }, 500);
            }
            
            $("#mobilenav").css({
                top: "18.25vh"
            });
        }
    }
});

$("#navIcon").on("click touch", function(){
    $("#mobilenav").slideToggle(300);
});

$(".container, #footer").on("click touch", function(){
    if($("#mobilenav").is(":visible")){
       $("#mobilenav").slideUp(300); 
    }
});

$(".mobilenavlinks a").on("click touch", function(){
   $(this).css({
       backgroundColor: "rgba(0,0,0, 0.2)"
   });
});