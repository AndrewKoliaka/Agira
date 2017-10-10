$(document)
    .ready(function () {

        function hidePopup(selector) {
            $('body').css('overflow', 'auto');
            $(selector).addClass('hidden');
        }

        function showPopup(selector) {
            $('body').css('overflow', 'hidden');
            $(selector).removeClass('hidden');
        }

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
            var id = $(this).data('id');
            if ($('.popup1').hasClass('hidden') && $('.solution-popup-' + id).length) {
                showPopup('.solution-popup-' + id);
            }
        });

        $('.close-btn').click(function (event) {
            event.preventDefault();
            hidePopup($(this).parents('.popup-wrapper'));
        });

        $(window).click(function (event) {
            if ($(event.target).hasClass('popup-wrapper')) {
                hidePopup('.popup-wrapper')
            }
        });

        $('.header__btn').click(function (event) {
            event.preventDefault();
            showPopup('.popup2');
        });

        $('.popup2__content').click(function (event) {
            event.stopPropagation();
        });


        $('.js-send-form').on('click', function (event) {
            event.preventDefault();
            var $form = $(this).parents('form');

            $.ajax({
                url: '/send.php',
                type: 'POST',
                data: $form.serialize(),
                success: function (data) {
                    console.log(data);
                    $form[0].reset();
                    hidePopup('.popup2');
                    showPopup('.popup-thank')
                },
                error: function (error) {
                    console.log(error);
                }
            });

        })
    });