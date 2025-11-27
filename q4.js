// Q4 - Special Offer Banner
$(function(){
  $('#hideBtn').on('click', function(){ $('.banner').hide(); });
  $('#showBtn').on('click', function(){ $('.banner').show(); });
  $('#slideBtn').on('click', function(){ $('.banner').slideToggle(); });
  $('#fadeBtn').on('click', function(){ $('.banner').fadeToggle(); });

  // rotate banners every 5 seconds using fadeIn/fadeOut
  let idx = 0;
  const banners = $('.banner');
  function rotate(){
    banners.fadeOut(400);
    $(banners[idx]).fadeIn(400);
    idx = (idx + 1) % banners.length;
  }
  // start by showing only first
  banners.hide(); $(banners[0]).show();
  setInterval(rotate, 5000);
});
