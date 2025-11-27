// Q6 - Event Subscription Panel
$(function(){
  function showMessage(t, msg){
    $('#messages').text(t + ': ' + msg).addClass('success');
    setTimeout(()=> $('#messages').text('').removeClass('success'), 2000);
  }

  // subscribe/unsubscribe using event delegation and toggling button text
  $('#topics').on('click', '.sub', function(){
    const btn = $(this);
    const topic = btn.data('topic');
    if (btn.text().trim() === 'Subscribe') {
      btn.text('Unsubscribe');
      showMessage(topic, 'Subscribed');
      // enable notifications could be simulated here
    } else {
      btn.text('Subscribe');
      showMessage(topic, 'Unsubscribed');
    }
  });

  // dynamically add new topics and attach events using .on()
  $('#addTopic').on('click', function(){
    const t = $('#newTopic').val().trim();
    if (!t) return;
    $('#topics').append(`<li>${t} <button class="sub btn" data-topic="${t}">Subscribe</button></li>`);
    $('#newTopic').val('');
    showMessage(t, 'Added');
  });

  // remove specific subscription: example remove Alerts after 5s for demo using .off()
  setTimeout(function(){
    $('#topics').find('li:contains("Alerts") .sub').off('click').text('Disabled');
  }, 5000);
});
