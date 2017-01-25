$(function() {

  $(".open_li").bind('click',function(){
    
    $(".open_li").removeClass('active');
    $(this).addClass('active');
    $open_li = $(this).attr('open_li');
    $(".artical_li").hide();
    $("#"+$open_li).show();

    $(document).scrollTop($('#indexPage').height());

    if("$('.artical_li'):visible"){
      $("#"+$open_li).find('.btn-block').removeClass('active');
      $("#"+$open_li).find('.btn-block').eq(0).addClass('active');
      $('.work').hide();
      $('.work').eq(0).show();
    }
    // $("#"+$open_li).find('.btn-block').removeClass('active');
    // $("#"+$open_li).find('.btn-block').eq(0).addClass('active');
    // $("#"+$open_li).find('.work').hide().eq(0).show();
    
    btn_link = $("#"+$open_li).find('.btn-block').attr('btn_link');
    $('#'+btn_link).hide();
    $('#'+btn_link).eq(0).show();

  });

  $(".btn-block").bind('click', function(){
    $(this).addClass('active');

    $btnLink = $(this).attr('btn_link');
    $(".btn-block").removeClass('active');
    $('.work').hide();
    $("#"+$btnLink).show();
    $(this).addClass('active');
  });

  $(document).scroll(function(){
      $('.header').addClass('main');
      $('.page-header').hide();
      $('.btn-block').show();
      var liH = $('#indexPage').height() / 25;
      if($(document).scrollTop() <= liH){
        $('.header').removeClass('main');
        $('.page-header').show();
        $('.btn-block').hide();
      }
  });
  // $(document).on("scrollstart",function(){
  //   $('.header').addClass('main');
  //     $('.page-header').hide();
  //     $('.btn-block').show();
  //     var liH = $('#indexPage').height() / 25;
  //     if($(document).scrollTop() <= liH){
  //       $('.header').removeClass('main');
  //       $('.page-header').show();
  //       $('.btn-block').hide();
  //     }
  // });

  if($(window).width() < 360){
    //文字取代
    $(".btn-block").each(function( index) {
        str = $( this ).text();
        var res = str.replace("作品", "");
        $(this).text(res);
    });
  }

  $("img.lazy").lazyload({effect : "fadeIn",effectspeed: 200 });
});
