$('body').append($('\
  <div id="irc-window">\
    <div id="irc-window-titlebar">\
      <img src="images/cleardot.gif" alt="Minimize">\
      <span id="irc-window-title">IRC</span>\
    </div>\
    <iframe id="irc-container" src="chrome-extension://pcjdahpmchjihaloenknimekngiclckp/src/main.html"></iframe>\
  </div>'));

$('#irc-window-titlebar').bind('click', function() {
  $("#irc-container").toggle();
});

