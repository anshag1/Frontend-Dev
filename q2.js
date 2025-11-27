// Q2 - Product Highlight
// Uses event delegation: attach handlers to parent (#prodList) for clicks/hover.
// Attribute selectors are used to style discount items.
$(function(){
  // highlight product on click
  $('#prodList').on('click', '.product', function(){
    $('.product').removeClass('selected');
    $(this).addClass('selected');
    // if out of stock, alert using data attribute
    if ($(this).data('stock') === 0) {
      alert('This product is out of stock!');
    }
  });

  // hover to show details
  $('#prodList').on('mouseenter', '.product', function(){
    const txt = $(this).text();
    $('#details').removeClass('hidden').text('Details: ' + txt + ' | Stock: ' + $(this).data('stock'));
  }).on('mouseleave', '.product', function(){
    $('#details').addClass('hidden').text('');
  });

  // favorite toggle - click on the heart span toggles selected class
  $('#prodList').on('click', '.fav', function(e){
    e.stopPropagation(); // prevent parent click
    $(this).toggleClass('chosen');
    $(this).text( $(this).hasClass('chosen') ? '♥' : '♡' );
  });

  // style products with discounts using attribute selector
  $('[data-discount!="0"]').css('background','#fff7e6'); // highlight discounted items
});
