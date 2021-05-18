window.onload = function(){

    $('.menu ul li').hover(function(){
        $(this).children('ul').stop().slideDown();
    },
        function(){
            $(this).children('ul').stop().slideUp();
        }
    );
    setInterval(function () {
        $('.slide>ul>li:first-child').fadeOut().next().fadeIn().end(1000).appendTo('.slide>ul');
    }, 3000);
}