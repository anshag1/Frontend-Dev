// Q1 - Welcome Page Greeting
// On document ready, compute time of day and set greeting accordingly.
// Also binds click handlers for buttons and greeting click alert.
$(function(){
  function setGreetingByTime(){
    const hour = new Date().getHours();
    let text = 'Hello';
    if (hour < 12) text = 'Good Morning';
    else if (hour < 18) text = 'Good Afternoon';
    else text = 'Good Evening';
    $('#greeting').text(text + ' — visitor!');
  }
  setGreetingByTime();

  // Change greeting to a motivational quote when button clicked
  $('#changeGreeting').on('click', function(){
    $('#greeting').text('Keep going — great things take time.');
  });

  // Toggle visibility of welcome message
  $('#toggleWelcome').on('click', function(){
    $('#welcomeMsg').toggle(); // jQuery .toggle() shows/hides element
  });

  // Show alert when greeting clicked
  $('#greeting').on('click', function(){
    alert('Welcome clicked! Have a productive day.');
  });

  // show current time
  $('#showTime').on('click', function(){
    $('#welcomeMsg').text('Current time: ' + new Date().toLocaleString());
  });
});
