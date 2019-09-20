// 首页banner文字动画效果
$('.i-banner-title').animate({
  'top': '240px',
  'opacity': 1
}, 700)

$('.i-banner-briefA').animate({
  'top': '322px',
  'opacity': 1
}, 700)

$('.i-banner-briefB').animate({
  'top': '352px',
  'opacity': 1
}, 700)

// 首页 - 定制化商户管理平台
var management = document.getElementById('management');

window.onscroll = function () {
  if (myScroll().scrollTop >= management.offsetTop - 600) {
    $(management).find('li').eq(0).animate({
      'right': '30px',
      'opacity': 1
    }, 700)
    $(management).find('li').eq(1).animate({
      'right': '86px',
      'opacity': 1
    }, 800)
    $(management).find('li').eq(2).animate({
      'right': '22px',
      'opacity': 1
    }, 1100)
    $(management).find('li').eq(3).animate({
      'right': '112px',
      'opacity': 1
    }, 1400)
    $(management).find('li').eq(4).animate({
      'right': '154px',
      'opacity': 1
    }, 1700)
  }
}

function myScroll() {
  return {
    scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
  }
}