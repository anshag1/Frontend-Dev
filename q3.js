// Q3 - Interactive FAQ
$(function(){
  // 1. Click question toggles its answer
  $('#faq').on('click', '.q', function(){
    $(this).next('.a').toggle();
  });

  // 2. Hover change question color
  $('#faq').on('mouseenter', '.q', function(){ $(this).css('color','blue'); })
           .on('mouseleave', '.q', function(){ $(this).css('color',''); });

  // 3. Double-click question collapses all answers
  $('#faq').on('dblclick', '.q', function(){ $('#faq .a').slideUp(); });

  // 4. Focus on answer input highlights parent question
  $('#faq').on('focus', 'input', function(){ $(this).closest('dd').prev('.q').css('background','#fffbcc'); });

  // 5. Blur from input resets background color
  $('#faq').on('blur', 'input', function(){ $(this).closest('dd').prev('.q').css('background',''); });
});
