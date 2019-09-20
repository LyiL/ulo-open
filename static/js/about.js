$(function () {
    $('#sidebar').find('li').on('click', function () {
        var index = $(this).index();
        $(this).parent().parent().children().children().removeClass('selected');
        $(this).addClass('selected');
        $('#container-outer').children().css('display', 'none').eq(index).css('display', 'block')
    })

    var $href = window.location.href;
    if($href.indexOf('?about') > 0){
        $(".sidebar").children().removeClass('selected');
        $(".sidebar .about").addClass('selected');
        $("#container-outer").children().css('display', 'none');
        $('#container-outer .about').css('display', 'block');
        $('.index').removeClass('color39f');
    }else if($href.indexOf('join') > 0){
        $(".sidebar").children().removeClass('selected');
        $(".sidebar .join").addClass('selected');
        $("#container-outer").children().css('display', 'none');
        $('#container-outer .join').css('display', 'block');
        $('.index').removeClass('color39f');
    }
})