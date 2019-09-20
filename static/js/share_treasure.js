$(function() {
    //核心功能切换特效
    $('.functions-btn-item').on({
        mouseenter: function() {
            $('.functions-btn-list li').css({
                backgroundColor: '#fff',
                color: '#a9a9a9'
			});
            $(this).css({
                backgroundColor: '#1671f9',
                color: '#fff'
            });
            var imgNum = $(this).index() + 1; 
            var textArr = ['灵活的分账规则，可支持预设规则实时多方分账','搭建一整套交易资金总分账户体系，资金安全有保障','定时、手动对账操作，使对账更加随心所欲','提供用户多样化的支付方式，满足不同场景支付需求','提供供应链金融功能支持及解决方案，保持供应链稳定发展'];
            $('.functions-text').html(textArr[$(this).index()]);
            $('.functions-img').attr('src','static/images/share/function_'+imgNum+'.png');
        }
    })
   
})
