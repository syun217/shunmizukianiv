


  $(function(){
    $('a[href^="#"]').click(function(){//#で始まるリンクの要素（出発地点）をクリックしたとき実行
      let speed = 500;
      let href= $(this).attr("href");//出発地点の値を取得
      let target = $(href == "#" || href == "" ? 'html' : href);//←到着地点の設定！
  
  
      let position = target.offset().top;//到着地点の場所の値を取得！
  
      $("html, body").animate({scrollTop:position}, speed, "swing");
  //swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
  return false; //出発地点(href)をクリックすると、URLにIDタグが付与されるのを防ぐ
    });
  });







$('#topSlider').slick({//←定型文
  fade:true,
  autoplay:true,
  autplaySpeed:8000,
  speed:4000,
  arrows: true,  // 左右の矢印を表示
  pauseOnHover:false
})

$('.slider').slick({//←定型文
    fade:true,
    speed:1000,
    arrows: true,  // 左右の矢印を表示
})

$('.choice-btn').slick({
  autoplay:true,
  autplaySpeed:8000,
  speed:1000,
  slidesToShow: 4, //表示させるスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.slider', //連動させるスライドショーのクラス名
});


$(window).scroll(function () {if ($(this).scrollTop() > 100) {
    $('#topBtn').fadeIn(500);}  
else {$('#topBtn').fadeOut(500);}
});

$(window).scroll(function () {if ($(this).scrollTop() > 300) {
  $('header').addClass('slide');}  
else {$('header').removeClass('slide');}
});




$(function () {
  $(window).scroll(function () {
      const wHeight = $(window).height();
      const scrollAmount = $(window).scrollTop();
      $('.fadein').each(function () {
          const targetPosition = $(this).offset().top;
          if(scrollAmount > targetPosition - wHeight - 80) {
              $(this).addClass("fadeIn");
          }
      });
  });
});


  
  