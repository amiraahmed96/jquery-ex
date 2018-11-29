$(function(){
    
    $('body').css('paddingTop',$('.navbar').height())
    
    
    $(".navbar li a").click(function(e){
        
        e.preventDefault();
        
        $('html , body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
            
        },1000);
        
    });
    
    
    //add active class
    $('.navbar li a').click(function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    
    
    
   
    $(window).scroll(function(){
        
        //scroll to top
        var scrolltop = $('.top');
        
        if($(window).scrollTop() >= 1000)
            {
                if(scrolltop.is(':hidden'))
                {
                    scrolltop.fadeIn(400);
                }
                
            } 
        else
            {
               scrolltop.fadeOut(400);
            }
        
        
        
         //sync navbar
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top)
                {
                    var blockid = $(this).attr('id');
                    //console.log(blockid);
                    
                    $('.navbar a').removeClass('active');
                    
                    $('.navbar li a[data-scroll="' + blockid + '"]').addClass('active');
                }
        });
    });
    
    
    $('.top').click(function(e){
        
        e.preventDefault();
        
        $('html , body').animate({
            
            scrollTop: 0
            
        },1000);
    });
    
    
    /* show popup*/
    $('.show-popup').click(function(){
        $('.popup').fadeIn();
    });
    
    $('.popup .inner .close').click(function(e){
        e.preventDefault();
        
        //if i have more than one close button
        //$(this).parentsUntil('.popup).parent().fadeOut();
        $('.popup').fadeOut();
    });
    
    $('.popup').click(function(){
        $(this).fadeOut();
    });
    
    $('.popup .inner').click(function(e){
        
        e.stopPropagation();
    });
    
    
    $(document).keydown(function(e){
        if(e.keyCode == 27)
            {
                $('.popup').fadeOut();
            }
    });
    
    //buttons effects
    $('.from-left').hover(
        function(){
            $(this).find('span').eq(0).animate({width:'100%'},300);
        },
        function(){
            $(this).find('span').eq(0).animate({width:'0%'},300);
        }
    );
    
    
    
});