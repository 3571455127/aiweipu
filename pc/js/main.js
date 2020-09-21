$(function () {
    // wow
    new WOW().init();
    // banner
    var swiperV = new Swiper('.banner .swiper-container', {
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        /*触碰后还能够继续轮播*/
        autoplayDisableOnInteraction: false,
        effect: 'fade',
        fade: {
            crossFade: false,
        },
        pagination: {
            el: '.banner .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.banner .swiper-button-next',
            prevEl: '.banner .swiper-button-prev',
        },
    });

    // index-pefe pefe-sw1
    certifySwiper = new Swiper('.pefe-sw1 .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: true,
        navigation: {
            nextEl: '.pefe-sw1 .swiper-button-next',
            prevEl: '.pefe-sw1 .swiper-button-prev',
        },

        on: {
            progress: function (progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 73 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale +
                        ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function (transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }

    })
    // figures
    var mySwiper = new Swiper('.figures .swiper-container', {
        speed: 500,
        navigation: {
            nextEl: '.figures .swiper-button-next',
            prevEl: '.figures .swiper-button-prev',
        },

    })

    // reference
    var mySwiper = new Swiper('.reference .swiper-container', {
        observer: true,
        observeParents: true,
        speed: 500,
        navigation: {
            nextEl: '.reference .swiper-button-next',
            prevEl: '.reference .swiper-button-prev',
        },

    })
    // index-pefe pefe-sw2
    var mySwiper = new Swiper('.pefe-sw2 .swiper-container', {
        observer: true,
        observeParents: true,
        speed: 500,
        navigation: {
            nextEl: '.pefe-sw2 .swiper-button-next',
            prevEl: '.pefe-sw2 .swiper-button-prev',
        },

    })
    // product
    var swiper = new Swiper('.pro-overview .swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.pro-overview .swiper-button-next',
            prevEl: '.pro-overview .swiper-button-prev',
        },
    });


    // company
    $(".certificate .list .box-img img").click(function () {
        $('.cerbox').addClass('on');
        $(".mask").fadeOut(100);
    });
    $(".closeBtn1,.mask").click(function () {
        $('.cerbox').removeClass('on');
        $(".mask").fadeOut(100);
    });

    // wap右上导航
    $(".nav li").click(function () {
        $(this).parent().parent().removeClass("in");
    })

    // 导航
    $(".layout").hover(function () {
        $(this).addClass("hovers")
    }, function () {
        $(".layout").removeClass("hovers")
    });

    $(".layout .nav .litem").hover(function () {
        $(this).prev().addClass("bottom-hover");
    }, function () {
        $(this).prev().removeClass("bottom-hover");
    })
    // up
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".gotop").fadeIn(1000);
            $(".layout").addClass("hovers");
            $(".layout").hover(function () {
                $(this).addClass("hovers")
            });
        } else {
            $(".gotop").fadeOut(1000);
            $(".layout").removeClass("hovers");
        }
    });
    $(".gotop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });



    if ($(window).width() <= 768) {
        // wap菜单切换
        $('.arrow').click(function () {
            $(this).toggleClass('active3');
            $(this).siblings('.mt_ul').slideToggle(300);
        })
        // 菜单切换
        $(".h_right").click(function () {
            $(".bg").animate({
                "right": "0"
            }, 200);
        })
        $('.bg_l').click(function () {
            $(".bg").animate({
                "right": "-100%"
            }, 200);
        })
        $(".mt_ul a").click(function () {
            $(".bg").animate({
                "right": "-100%"
            }, 200);
        });
    }
    // milestone
    var galleryThumbs1 = new Swiper('.milestone .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 9,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        slidesPerView: '9',
        slideToClickedSlide: true,
        breakpoints: {
            1200: {
                slidesPerView: 8,
            },
            768: {
                slidesPerView: 7,
            },
            640: {
                slidesPerView: 5,
            },
            320: {
                slidesPerView: 3,
            }
        }
    });
    var galleryTop1 = new Swiper('.milestone .gallery-top', {
        spaceBetween: 0,
        autoHeight: true,
        effect: 'fade',
        controller: {
            control: galleryThumbs1,
        },
    });
    galleryThumbs1.controller.control = galleryTop1;
    galleryTop1.controller.control = galleryThumbs1;
})



var submitcount2 = 0;
function beforeSubmit2(form) {
    if (form.name.value == '') {
        alert('Name can not be empty');
        form.name.focus();
        return false;
    } else if (form.email.value == '') {
        alert('Please enter the correct email format');
        form.email.focus();
        return false;
    } else if (form.email.value.indexOf('@') < 0) {
        alert('The email is wrong');
        form.email.focus();
        return false;
    } else if (form.com.value == '') {
        alert('Please enter the correct Company format');
        form.com.focus();
        return false;
    } else if (form.message.value == '') {
        alert('The message can not be empty');
        form.message.focus();
        return false;
    } else {
        if (submitcount2 == 0) {
            submitcount2++;
            return true;
        } else {
            alert("Message is being sent, please wait!");
            return false;
        }
    }
}
