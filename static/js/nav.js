$(function () {
    // ------------------- 开放平台 ----------------------

    // 商业合作(移入)
    $('.navbar>ul>li').eq(1).mouseover(function () {
        $('.dropDown-MenuA').css('display', 'block');
    })

    // 商业合作(移出)
    $('.navbar>ul>li').eq(1).mouseout(function () {
        $('.dropDown-MenuA').css('display', 'none');
    })

    // 开发者中心(移入)
    $('.navbar>ul>li').eq(2).mouseenter(function () {
        $('.dropDown-MenuB').css('display', 'block');
    })

    // 开发者中心(移出)
    $('.navbar>ul>li').eq(2).mouseleave(function () {
        $('.dropDown-MenuB').css('display', 'none');
    })

    // 我是合作商(移入)
    $('.cooperate>a').mouseenter(function () {
        $('.cooperate-menu').css('display', 'block')
    })

    // 我是合作商(移出)
    $('.cooperate').mouseleave(function () {
        $('.cooperate-menu').css('display', 'none');
    })

    // ------------------- 开放平台 ----------------------





    
    // ------------------ 开发者中心 ------------------------

     // 商业合作(移入)
    $('.top-nav>ul>li').eq(1).mouseenter(function () {
        $('.dropDown-MenuA').css('display', 'block');
    })

    // 商业合作(移出)
    $('.top-nav>ul>li').eq(1).mouseleave(function () {
        $('.dropDown-MenuA').css('display', 'none');
    })

    // 开发者中心(移入)
    $('.top-nav>ul>li').eq(2).mouseenter(function () {
        $('.dropDown-MenuB').css('display', 'block');
    })

    // 开发者中心(移出)
    $('.top-nav>ul>li').eq(2).mouseleave(function () {
        $('.dropDown-MenuB').css('display', 'none');
    })

})