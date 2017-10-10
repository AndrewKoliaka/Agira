$(document)
    .ready(function () {
        $('.slider').slick({arrows: false});

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

        $('.solution__btn').click(function (event) {
            event.preventDefault();
            if ($('.popup1').hasClass('hidden')) {
                $('.popup1').removeClass('hidden');
            }
        });

        $('.close-btn').click(function (event) {
            event.preventDefault();
            $(this)
                .parent()
                .addClass('hidden');
        });

        $(window).click(function (event) {
            console.log(event.target);
            if (!$(event.target).hasClass('header__btn')) {
                $('.popup2').addClass('hidden');
            }
        });

        $('.header__btn').click(function (event) {
            event.preventDefault();
            $('.popup2').removeClass('hidden');
        });

        $('.popup2').click(function (event) {
            event.stopPropagation();
        });
    });