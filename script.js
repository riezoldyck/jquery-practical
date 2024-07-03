// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 4000,
  arrows: false,
  fade: true,
});

// ホバーイベント
$(function () {
  $('a, .item img').hover(function () {
    $(this).stop().animate({'opacity':0.5});
  },function() {
    $(this).stop().animate({'opacity':1});
  });
});

// topへ戻るボタン
$(document).ready(function () {
  var pagetop = $('#back-btn');
  pagetop.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $('body, html').animate({scrollTop: 0}, 500);
    return false;
  });
});

// リンクのスクロールをなめらかにする
$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// スクロール時のフェードイン
$(function () {
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
      console.log("aaa");
    }); 
  });
});

// Worksの画像をクリックしたときにモーダルで拡大表示する
$(function () {
$('.works img').click(function () {
  const imgSrc = $(this).attr('src');
  const imgAlt = $(this).attr('alt');
  $('.big-img').attr({
    src: imgSrc,
    alt: imgAlt,
  });
  $('.modal').fadeIn();
});

// 閉じるボタンをクリックしたときにモーダルを閉じる
$('.close-btn').click(function () {
  $('.modal').fadeOut();
});
});