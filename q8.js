// Q8 - Dynamic Blog Posts
$(function(){
  $('#addPost').on('click', function(){
    $('#posts').append('<div class="post">New post at '+ new Date().toLocaleTimeString() +'</div>');
  });
  $('#prependPost').on('click', function(){
    $('#posts').prepend('<div class="post">Featured: Important update!</div>');
  });
  $('#removeLast').on('click', function(){
    $('#posts').children().last().remove();
  });
  // add tags using before/after
  $('#posts').on('mouseenter', '.post', function(){
    if (!$(this).prev().hasClass('tag')) $(this).before('<div class="tag">#blog</div>');
  }).on('mouseleave', '.post', function(){
    $(this).prev('.tag').remove();
  });

  // highlight posts with keyword 'Performance'
  $('#posts .post').filter(function(){ return $(this).text().indexOf('Performance') !== -1; }).css('background','#e6ffe6');
});
