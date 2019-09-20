$(function () {
    $('#sidebar').find('a').on('click', function () {
        $(this).parent().parent().children().children().removeClass('selected');
        $(this).addClass('selected');
    })

    $('.content-body').find('li').on('click', function () {
        var index = $(this).index();
        console.log(index);
        $('.content-text>div').eq(index).css('display', 'block');
        $('.content-body>ul').css('display', 'none');
    })

    
    // 侧边栏一级列表样式
    $('#sidebar>div>a').on('click', function () {
        $(this).parent().parent().children().children().removeClass('titleBlue');
        $('#sidebar').find('a').removeClass('selected');
        $(this).addClass('titleBlue');
    })


    // 侧边栏二级列表样式
    $('.down-list').find('a').on('click', function () {
        $('.down-list').find('a').removeClass('selected');
        $('.sidebar-title').removeClass('titleBlue');
        $(this).addClass('selected').parents('.down-list').prev().addClass('titleBlue');
    })


    // 侧边栏下拉列表隐藏/显示
    // $('#sidebar .down-list').prev('a').on('click', function () {
    //     $(this).next().stop().slideToggle();
    // })

})