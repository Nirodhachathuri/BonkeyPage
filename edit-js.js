jQuery(function($){

// ================== preloader start
$(window).load(function(){
  $('#preloader').fadeOut(300);
});
// ================== preloader end

// ================== fixed nav start
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop > 50){
     $('.main_header').addClass("fixed-nav");
  }else{
    $('.main_header').removeClass("fixed-nav"); 
  }
});
// ================== fixed nav end

// ================== navigation start
function sidemenu(){
  $('.nav_sec').toggleClass('slidein');
  $('.nav_sec').prepend('<div class="cls-btn"></div>');
  $('.nav_sec').append('<a href="https://docs.bonkbaby.com/" class="mbl-show-btn btn-skew1 btn-warning-solid" target="_blank">White Paper</a>');

  $('.cls-btn').on('click', function(){
      $('.nav_sec').removeClass('slidein');
  });
}
$('body').find('.toggle-menu').on('click',sidemenu);
// ================== navigation end

// ================== section scroll start
 $( '.nav_sec > ul > li > a' ).click(function(e){
  e.preventDefault();
  $('.nav_sec').removeClass('slidein');
  var href = $(this).attr( 'href' );
  var headerHeight = $(".main_header").innerHeight();
  console.log(headerHeight);
  
  $( 'html, body' ).animate({
    scrollTop: $( href ).offset().top - headerHeight
  }, '500' );
  
});

 $('.nav_sec > ul > li:first-child > a').click(function(e) { 
    e.preventDefault();     
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});
 // ================== section scroll end

// ================== darkmode / lightmode start
$(".switch-slider").click(function(){
  $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
    var backgroundBodyImage = $('body').attr('data-dark-body-image');
    $('body').css('background-image', backgroundBodyImage);
    var backgroundAboutImage = $('.about').attr('data-dark-about-image');
    $('.about').css('background-image', backgroundAboutImage);
    var backgroundChartImage = $('.tokenomics-chart-roadmap').attr('data-dark-chart-image');
    $('.tokenomics-chart-roadmap').css('background-image', backgroundChartImage);
    var backgroundMissiontImage = $('.mission-left').attr('data-dark-mission-image');
    $('.mission-left').css('background-image', backgroundMissiontImage);
    var backgroundFooterImage = $('.main_footer').attr('data-footer-dark-image');
    $('.main_footer').css('background-image', backgroundFooterImage);

  }else{
    var backgroundBodyImage2 = $('body').attr('data-light-body-image');
    $('body').css('background-image', backgroundBodyImage2);
    var backgroundAboutImage2 = $('.about').attr('data-light-about-image');
    $('.about').css('background-image', backgroundAboutImage2);
    var backgroundChartImage2 = $('.tokenomics-chart-roadmap').attr('data-light-chart-image');
    $('.tokenomics-chart-roadmap').css('background-image', backgroundChartImage2);
    var backgroundMissiontImage2 = $('.mission-left').attr('data-light-mission-image');
    $('.mission-left').css('background-image', backgroundMissiontImage2);
    var backgroundFooterImage2 = $('.main_footer').attr('data-footer-light-image');
    $('.main_footer').css('background-image', backgroundFooterImage2);
  }
});

// ================== darkmode / lightmode end

// ================== Scroll to Top start
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('.footer-top-show').fadeIn(200);    
    } else {
        $('.footer-top-show').fadeOut(200);   
    }
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
    $('.footer-top-show').fadeOut(200);
    }, 3000));
});
$('.footer-top-show').click(function() {      
    $('body,html').animate({
        scrollTop : 0                      
    }, 500);
});
// ================== Scroll to Top end

// ================== aos start
AOS.init({
    fset: 200,
    delay: 100,
    duration: 800,
});
// ================== aos end

});
	


	
	
	
	
	
	
	
	