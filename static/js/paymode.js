$(function () {

        // PC网页支付演示页面切换
        // 第一页切换第二页
        $('#PCpay-BtnA').on('click', function () {
            $('.PCpay-demo-bodyA').css('display', 'none');
            $('.PCpay-demo-bodyB').css('display', 'block');
        })

        // 第二页切换第三页
        $('#PCpay-BtnB').on('click', function () {
            $('.PCpay-demo-bodyB').css('display', 'none');
            $('.PCpay-demo-bodyC').css('display', 'block');
            $('.PCpay-demo-contentA').css('display', 'block');
        })

        // 第三页遮罩层显示
        $('#PCpay-BtnC1').on('click', function () {
            $('.PCpay-demo-contentB').css('display', 'block');
        })

        // 第三页切换第四页
        $('#PCpay-BtnC2').on('click', function () {
            $('.PCpay-demo-contentA').css('display', 'none');
            $('.PCpay-demo-contentB').css('display', 'none');
            $('.PCpay-demo-bodyC').css('display', 'none');
            $('.PCpay-demo-bodyD').css('display', 'block');
        })

        // 第四页切换回第一页
        $('#PCpay-BtnD').on('click', function () {
            $('.PCpay-demo-bodyD').css('display', 'none');
            $('.PCpay-demo-bodyA').css('display', 'block');
        })


        
        // PC网页支付按钮
        $('.PC-pay-click').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('.mobile-pay').find('a').removeClass('color3b97ff');
            $('#PC-Pay').css('display', 'block');
            $('.header').css('height', '350');
            PaySwitch('.pay-imagesA', '0 -50px');
        })

        // 移动支付 和 H5 按钮
        $('.mobile-pay-click').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#H5-pay').css('display', 'block');
            $('.header').css('height', '300');
            PaySwitch('.pay-imagesB', '-75px -50px');
            $('.mobile-pay-H5').addClass('color3b97ff');
        })

        // 移动支付 和 H5 按钮
        $('.mobile-pay-H5').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#H5-pay').css('display', 'block');
            $('.header').css('height', '300');
            PaySwitch('.pay-imagesB', '-75px -50px');
            $('.mobile-pay-H5').addClass('color3b97ff');
        })

        // 移动支付 - 微信公众号 按钮
        $('.mobile-pay-public').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#Mobile-pay').css('display', 'block');
            $('.header').css('height', '300');
            PaySwitch('.pay-imagesB', '-75px -50px');
            $(this).addClass('color3b97ff').siblings().removeClass('color3b97ff');
        })

        // 移动支付 - APP支付 按钮
        $('.mobile-pay-APP').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#APP-pay').css('display', 'block');
            $('.header').css('height', '300');
            PaySwitch('.pay-imagesB', '-75px -50px');
            $(this).addClass('color3b97ff').siblings().removeClass('color3b97ff');
        })


        // 刷卡支付
        $('.card-pay').on('mousemove', function () {
            PaySwitch('.pay-imagesC', '-105px -50px');
        })


        // 易码付
        $('.easy-pay-click').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#Easy-pay').css('display', 'block');
            $('.header').css('height', '350');
            PaySwitch('.pay-imagesD', '-155px -50px');
        })

        // 收款终端 和 即收PC收银台 按钮
        $('.take-terminal-click').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#PC-Take-Terminal').css('display', 'block');
            $('.header').css('height', '350');
            PaySwitch('.pay-imagesE', '-210px -50px');
            $('.take-PC-terminal').addClass('color3b97ff');
        })

        // 收款终端 和 即收PC收银台 按钮
        $('.take-PC-terminal').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#PC-Take-Terminal').css('display', 'block');
            $('.header').css('height', '350');
            PaySwitch('.pay-imagesE', '-210px -50px');
            $('.take-PC-terminal').addClass('color3b97ff');
        })

        // 收款终端 - 即收APP 按钮
        $('.take-APP-terminal').on('mousemove', function () {
            $('.content-wrap').css('display', 'none');
            $('#APP-Take-Terminal').css('display', 'block');
            $('.header').css('height', '350');
            PaySwitch('.pay-imagesE', '-210px -50px');
            $('.take-APP-terminal').addClass('color3b97ff');
        })

        // 企业付款 - 按钮
        $('.company-pay-click').on('mousemove', function () {
            PaySwitch('.pay-imagesF', '-280px -50px');
        })



        // 支付方式样式切换
        function PaySwitch (images, position) {
            // 先将所有的图片调整为默认
            $('.pay-imagesA').css('backgroundPosition', '0 0');
            $('.pay-imagesB').css('backgroundPosition', '-75px 0');
            $('.pay-imagesC').css('backgroundPosition', '-105px 0');
            $('.pay-imagesD').css('backgroundPosition', '-155px 0');
            $('.pay-imagesE').css('backgroundPosition', '-210px 0');
            $('.pay-imagesF').css('backgroundPosition', '-280px 0');

            $(images).css('backgroundPosition', position);
            $('.pay-mode').find('p').removeClass('color3b97ff');
            $('.mobile-pay').find('a').removeClass('color3b97ff');
            $(images).siblings().addClass('color3b97ff');
        }
    })