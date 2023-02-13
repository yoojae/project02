

$(function() {

    function lnbMedia(){
        if (window.matchMedia("(min-width: 769px)").matches) {
            $('.hide_sub .lnb>li').off('click')

            let state=false;

            $('.lnb').on('mouseover', function() {
                if(!state) {
                    $('.inner_header').stop().animate({
                        height:+450
                    },300);
                    state=true;
                }
            });
        
            $('.inner_header').mouseleave(function(){
                $('.inner_header').animate({
                    height:125
                },300);
                state=false;
            });


        } else {
            $('.hide_sub .lnb>li').on('click', function() {
                $('.m_sub').stop().slideUp();
                if($(this).children('.m_sub').is(':hidden')){
                    $(this).children('.m_sub').slideDown();
                } else {
                    $(this).children('.m_sub').slideUp();
                }
            })
        };
    }
    lnbMedia();

    
    $('.mob_bar').click(function() {
        $('.hide_sub').addClass('active')
        $('.hide_back').css('display','block')
    })
    $('.sub_close_btn').click(function() {
        $('.hide_sub').removeClass('active')
        $('.hide_back').css('display','none')
    })




    // visual_main

    let mainSwiper = new Swiper(".visualswiper", {
        loop: true,
        effect: 'fade',
        loopedSlides: 5,
        autoplay: { 
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
            pagination: {
                el: ".pagination_custom",
                type: "fraction"
                }
            },
            601: {
                pagination: {
                    el: ".pagination_custom",
                    type: "fraction"
                }
            },
            769: {
            pagination: {
                el: ".pagination_custom",
                type: "bullets"
                }
            }
        }
    });

    let thumbSwiper = new Swiper(".visualswiper", {
        loop: true,
        effect: 'fade',
        loopedSlides: 5,
        pagination: {
            el: ".pagination_thumb",
            type: "bullets",
            clickable : true,
        },

    });


    mainSwiper.controller.control = thumbSwiper;
    thumbSwiper.controller.control = mainSwiper;

    let mainBar=$('.pagination_custom')
    let mainThum=$('.pagination_thumb')

    mainThum.hide()

    mainBar.mouseover(function() {
        mainThum.show()
    })
    mainBar.mouseleave(function() {
        mainThum.hide()
    })

    mainThum.mouseover(function() {
        mainThum.show()
    })
    mainThum.mouseleave(function() {
        mainThum.hide()
    })
    


    // mobile & tablet week_list

    $( ".list_btn_right" ).click(function() {
        if(!$(".list_sheet li").last().is(":visible")){
            $(".list_sheet li:visible").hide().next("li").fadeIn("80");
        }

        if(!$(".list_sheet_second li").last().is(":visible")){
            $(".list_sheet_second li:visible").hide().next("li").fadeIn("80");
        }

        if(!$(".week_title li").last().is(":visible")){
            $(".week_title li:visible").hide().next("li").fadeIn("80");
        }
        
        return false;
    });

    $( ".list_btn_left" ).click(function() {
        if(!$(".list_sheet li").first().is(":visible")){
            $(".list_sheet li:visible").hide().prev("li").fadeIn("80");
        }

        if(!$(".list_sheet_second li").first().is(":visible")){
            $(".list_sheet_second li:visible").hide().prev("li").fadeIn("80");
        }

        if(!$(".week_title li").first().is(":visible")){
            $(".week_title li:visible").hide().prev("li").fadeIn("80");
        }

        return false;
    });

    $('.list_sheet_second').hide()

    $('.more_btn').click(function() {
        $('.list_sheet_second').show().fadeIn(500)
        
        $('.list_box .week_list .more_btn').css('display','none').fadeOut(200);
        $('.list_box .no_btn').css('display','block').fadeIn(200);

    });

    $('.no_btn').click(function() {
        $('.list_sheet_second').hide()

        $('.list_box .week_list .more_btn').css('display','block').fadeIn(200);
        $('.list_box .no_btn').css('display','none').fadeOut(200);

    });




    // program

    $('.program .program_sheet_box .wish i').click(function() {
        let i = $(this).index()
        $(this).eq(i).css('color','red')
    });
    

    let program = new Swiper(".movie_sheet", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
          nextEl: ".program .swiper-button-next",
          prevEl: ".program .swiper-button-prev",
        },

        breakpoints: {
            601: {
                slidesPerView: 3
            },
            769: {
                slidesPerView: 4,
                slidesPerGroup: 4
            }
        }
    });

    let show = new Swiper(".show_sheet", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            601: {
                slidesPerView: 3
            },
            769: {
                slidesPerView: 4,
                slidesPerGroup: 4
            }
        }
    });



    // critic

    $('.critic .critic_box .critic_hide02').css('display','none')

    $('.critic_more_btn').click(function() {
        $('.critic .critic_box .critic_hide01').fadeIn(500, function() {
            $(this).show()
        });

        $('.critic .critic_box .critic_more_btn').css('display','none')
        $('.critic .critic_box .critic_more_btn02').css('display','block')
    });

    $('.critic .critic_box .critic_more_btn02').click(function() {
        $('.critic .critic_box .critic_hide02').fadeIn(500, function() {
            $(this).show()
        });
        $('.critic .critic_box .critic_more_btn02').css('display','none')
    });


    let criticBox=$('.critic_box>section').width()

    $('.critic_btn_box .critic_right').click(function() {
        $('.critic .critic_box .critic_hide02').css('display','flex');
        $('.critic_box').animate({left: criticBox*-1}, 100, function() {
            $(this).children('.critic_box>section:first').insertAfter('.critic_box>section:last');
            $(this).css('left',0);
        });
    });
    $('.critic_btn_box .critic_left').click(function() {
        $('.critic .critic_box .critic_hide02').css('display','flex');
        $('.critic_box').animate({left:0}, 100, function() {
            $(this).children('.critic_box>section:last').insertBefore('.critic_box>section:first');
            $(this).css('left',criticBox*-1);
        });
    });
    


    // event_banner

    let event = new Swiper(".event", {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
          nextEl: ".event_banner_box .swiper-button-next",
          prevEl: ".event_banner_box .swiper-button-prev",
        },

        breakpoints: {
            601: {
                slidesPerView: 2
            }
        }
    });



    // mesena company

    let list=$('.relevant>ul>li').width();
    let mesenaLi=$('.mesena>ul>li').width();


    function relSlide() {
        $(".relevant>ul").animate({ left: list*-1 }, 1000, function () {

            $(this).children('.relevant li:first').insertAfter('.relevant li:last');
            $(this).css('left',0);
        }); 

    };
    setInterval(relSlide, 3000);


    function meSlide() {
        $(".mesena>ul").animate({ left: mesenaLi*-1 }, 1000, function () {

            $(this).children('.mesena li:first').insertAfter('.mesena li:last');
            $(this).css('left',0);
        }); 

    };
    setInterval(meSlide, 3000);


    // reservation_btn

    $('.speed_reservation').click(function() {
        $('.reserv_sheet').show(function(){
            $(this).fadeIn(1000)
        });
    });
    $('.reserv_close_btn').click(function() {
        $('.reserv_sheet').hide()
    });

    let reservSheet=$('.reserv_sheet').height()
    
    $('.reserv_pro').click(function() {
        $('.reserv_sheet').addClass('ad').stop().animate({
            height:reservSheet+260
        },300)
    })



    // scroll_btn

    $(window).scroll(function() {

        if($(window).scrollTop()>=40) {
            $('.move_btn .top_btn').fadeIn(500);
            $('.move_btn .bottom_btn').fadeIn(500);
        } else {
            $('.move_btn .top_btn').css('display','none');
            $('.move_btn .bottom_btn').css('display','none');
        }

    });

    $('.move_btn .top_btn').click(function() {
        $('html,body').stop().animate({
            scrollTop:0
        },1000);
    });

    $('.move_btn .bottom_btn').click(function() {
        $('html, body').animate({
            scrollTop:$(document).height()
        },1000);
        
    });



    // map
    
    const container = document.getElementById('map');
    let options = {
        center: new kakao.maps.LatLng(35.17110422803009, 129.12701120895144),
        level: 3
    };
    let map = new kakao.maps.Map(container, options); 

});

