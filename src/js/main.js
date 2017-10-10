$(document)
    .ready(function () {
        $('.slider').slick();


        $('.control--left').click(function(event){
            event.preventDefault();
            $('.slider').slick('slickPrev');
        });

        $('.control--right').click(function(event){
            event.preventDefault();
            $('.slider').slick('slickNext');
        });
    });