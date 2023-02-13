$(function(){

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



    $(window).scroll(function(){
        if($(window).scrollTop()>=40) {
            $('.route_box').addClass('fix');
        } else {
            $('.route_box').removeClass('fix');
        }

        if($(window).scrollTop()>=2300) {
            $('.route_box').addClass('color')
        } else {
            $('.route_box').removeClass('color');
        }

    });


    $(window).scroll(function(){
        if($(window).scrollTop()>=1500) {
            $('.tab_link').addClass('fix02');
        } else {
            $('.tab_link').removeClass('fix02');
        }
    });

    
    let tabSecond=$('.tab_link02')

    $(window).scroll(function(){

        tabSecond.hide()
        $('.tab_link02 .link_year').hide()
    
        if($(window).scrollTop()>=1500) {
            tabSecond.show().addClass('fix03')
            $('.tab_link02 .link_year').addClass('fix04')
        } 


    });


    let aLi=$('.tab_link02 .link_year a')

    $('.tab_link02 .tab_year').click(function() {

        $('.tab_link02 .link_year').hide().slideDown()

        aLi.hide().each(function(index) {
            $(this).delay(200*index).fadeIn(500)
        });

    });


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

});