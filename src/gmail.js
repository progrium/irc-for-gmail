$('body').append($('\
  <div id="irc-window">\
    <div id="irc-window-titlebar">\
      <img src="images/cleardot.gif" alt="Minimize">\
      <span id="irc-window-title">IRC</span>\
    </div>\
    <iframe id="irc-container" src="'+chrome.extension.getURL('src/irc.html')+'"></iframe>\
  </div>'));

$('#irc-window-titlebar').bind('click', function() {
  $("#irc-container").toggle();
  $("#irc-window-titlebar").removeClass("irc-alert");
});

window.addEventListener('message', function(event) {
  if ("status" in event.data) {
    if ($('#irc-container').css('display') == 'none') {
      $("#irc-window-titlebar").addClass("irc-alert");
    }
    $("#irc-window-title").text(event.data.status);
  }
});

