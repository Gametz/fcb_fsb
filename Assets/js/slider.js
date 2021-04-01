$(function() {
var sldr = $('.sldr'),
sldrContent = sldr.html(),
slideWidth = $('.sl_ctr').outerWidth(),
slideCount = $('.sldr img').length,
prv_b = $('.prv_b'),
nxt_b = $('.nxt_b'),
sldrInterval = 3500,
animateTime = 1500,
course = 1,
margin = - slideWidth;
$('.sldr img:last').clone().prependTo('.sldr');$('.sldr img').eq(1).clone().appendTo('.sldr');$('.sldr').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});
