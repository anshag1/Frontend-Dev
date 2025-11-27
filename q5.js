// Q5 - Team Members Directory
$(function(){
  // 1. click manager -> highlight direct reports (children ul li)
  $('.manager').on('click', function(){
    $(this).siblings('ul').find('li').addClass('highlight');
    setTimeout(()=> $(this).siblings('ul').find('li').removeClass('highlight'), 1500);
  });

  // 2. hover employee -> show contact using .next() won't work here, so use data attribute
  $('.employee').hover(function(){
    $('#contact').removeClass('hidden').text('Contact: ' + $(this).data('email'));
  }, function(){ $('#contact').addClass('hidden').text(''); });

  // 3. click department -> change background of members via .children()
  $('.department').on('click', function(e){
    if (e.target === this) {
      $(this).children('ul').find('li').css('background','#f0f8ff');
    }
  });

  // 4. random employee -> highlight siblings
  $('#randomBtn').on('click', function(){
    const all = $('.employee');
    const idx = Math.floor(Math.random()*all.length);
    const chosen = all.eq(idx);
    chosen.siblings().addClass('selected');
    setTimeout(()=> chosen.siblings().removeClass('selected'), 2000);
  });

  // 5. collapse/expand using parent().find()
  $('#collapseBtn').on('click', function(){
    $('.department').each(function(){
      $(this).find('ul').toggle();
    });
  });
});
