$(document)
    .ready(function () {
        $('.slider').slick();


        $('.control--left').click(function (event) {
            event.preventDefault();
            $('.slider').slick('slickPrev');
        });

        $('.control--right').click(function (event) {
            event.preventDefault();
            $('.slider').slick('slickNext');
        });

        var toggleMenu = $('.header-menu');

        $('.site-nav__menu-trigger').click(function () {
            toggleMenu.slideToggle(200);
        });

        function adaptiveToScreenWidth() {
            var screenWidth = $(window).width();

            if (screenWidth < 768) {
                toggleMenu.removeAttr('style');
            }
        }

        $(window)
            .resize(function () {
                adaptiveToScreenWidth();
            });

        adaptiveToScreenWidth();
    });