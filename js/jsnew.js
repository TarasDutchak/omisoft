$(document).ready(function(){

    $('.servcat').click(function(){
        $(this).toggleClass('rotate');
        $(this).next('.footer__list').slideToggle()
    });




});