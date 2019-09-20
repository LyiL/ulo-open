$(function () {
    // 服务商/代理商/银行合作 banner文字动画效果
    $('.banner-title').animate({
        'top': '210px',
        'opacity': 1
    }, 700)

    $('.banner-brief').animate({
        'top': '270px',
        'opacity': 1
    }, 700)

    

    // 首页banner文字动画效果
    $('.i-banner-title').animate({
        'top': '320px',
        'opacity': 1
    }, 700)
    
    $('.i-banner-btn').animate({
        'top': '516px',
        'opacity': 1
    }, 700)
    
    $('.i-banner-briefA').animate({
        'top': '486px',
        'opacity': 1
    }, 700)

    $('.i-banner-briefB').animate({
        'top': '514px',
        'opacity': 1
    }, 700)

     // banner文字动画效果
     $('.share-banner-title').animate({
        'top': '240px',
        'opacity': 1
    }, 700)
    
    $('.share-banner-briefA').animate({
        'top': '322px',
        'opacity': 1
    }, 700)
    
    $('.share-banner-briefB').animate({
        'top': '352px',
        'opacity': 1
    }, 700)


    // 服务商和代理商圆圈效果

    $('#circle-boxA').find('li').hover(function () {
        $(this).find('.boxB-wrap').stop().animate({'marginTop': '-200px'}, 500);
        $(this).find('.circle-boxA-content').children().stop().fadeOut();
    }, function () {
        $(this).find('.boxB-wrap').stop().css({'marginTop': 0})
        $(this).find('.circle-boxA-content').children().stop().fadeIn(10);
    })
})