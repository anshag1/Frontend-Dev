// Q7 - Search Courses
$(function(){
  function updateCount(){
    $('#count').text($('#courseList .course:visible').length);
  }
  $('#search').on('keyup', function(){
    const q = $(this).val().toLowerCase();
    $('#courseList .course').each(function(){
      const txt = $(this).text().toLowerCase();
      if (txt.indexOf(q) !== -1) {
        $(this).show();
        // highlight matched text - simple approach by wrapping (no HTML escaping)
        const regex = new RegExp('('+q+')','ig');
        if (q) $(this).html($(this).text().replace(regex,'<span class="highlight">$1</span>'));
        else $(this).html($(this).text());
      } else {
        $(this).hide();
      }
    });
    updateCount();
  });
  $('#clearSearch').on('click', function(){ $('#search').val(''); $('#courseList .course').show().each(function(){ $(this).text($(this).text()); }); updateCount(); });
  updateCount();
});
