$(window).scroll(function() {
    $('.second__text').each(function(){
        var imagePos2 = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos2-400 < topOfWindow) {  
                $(this).addClass("animated");            
                $(this).addClass("visible");
                $(this).addClass("fadeIn");            
            }
        });

    $('.third__text').each(function(){
        var imagePos2 = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
            if (imagePos2-300 < topOfWindow) {  
                $(this).addClass("animated");            
                $(this).addClass("visible");
                $(this).addClass("fadeIn");            
            }
        });
});