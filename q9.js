// Q9 - Multi-jQuery Widgets
// Demonstrate noConflict pattern: store jQuery in two different variables (for demo both point to same version).
var jq1 = jQuery.noConflict(true); // relinquish global $, jQuery (returns current jQuery)
 // Note: In real multi-version scenario you'd load two versions and call noConflict appropriately.
// For demo, reassign global jQuery for second "version"
window.jQuery2 = jq1; // simulate a second independent jQuery variable

// Use jq1 for carousel
jq1(function($){
  let idx = 0;
  setInterval(function(){
    idx = (idx + 1) % 5;
    $('#cidx').text(idx);
  }, 2000);
});

// Use jQuery2 for modal and tooltips
jQuery2(function($){
  $('#openModal').on('click', function(){ $('#modal').toggleClass('hidden'); });
  // simple tooltip on hover
  $('.widget').hover(function(){ $(this).attr('title','Tooltip for '+ $(this).text()); });
});
