// Q10 - Registration Form Validation
$(function(){
  // simple in-memory "database" of emails to check uniqueness
  const used = ['used@example.com','taken@mail.com'];

  function isEmailValid(e){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

  $('#regForm').on('submit', function(ev){
    ev.preventDefault();
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const pwd = $('#password').val();

    // reset
    $('#name,#email,#password').removeClass('error');
    $('#msg').text('');

    let ok = true;
    if (!name){ $('#name').addClass('error'); ok = false; }
    if (!isEmailValid(email) || used.indexOf(email) !== -1){ $('#email').addClass('error'); ok = false; }
    if (!pwd || pwd.length < 8){ $('#password').addClass('error'); ok = false; }

    if (!ok){
      $('#msg').text('Please fix errors').addClass('error');
    } else {
      $('#msg').text('Registration successful!').removeClass('error').addClass('success');
      // simulate adding to used list
      used.push(email);
    }
  });

  // live highlight invalid fields
  $('#name').on('input', function(){ $(this).toggleClass('error', !$(this).val().trim()); });
  $('#email').on('input', function(){ $(this).toggleClass('error', !isEmailValid($(this).val()) || used.indexOf($(this).val().trim()) !== -1); });
  $('#password').on('input', function(){ $(this).toggleClass('error', $(this).val().length < 8); });
});
