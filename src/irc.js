(function() {
  var $cmd, irc5;

  irc5 = new client.IRC5;

  irc5.onStatus = function(status) {
    $('#status').text(status);
    return window.parent.postMessage({
      status: status
    }, "https://mail.google.com");
  };

  $cmd = $('#cmd');

  $cmd.focus();

  $(window).keydown(function(e) {
    var _ref;
    if (!(e.metaKey || e.ctrlKey)) {
      e.currentTarget = $('#cmd')[0];
      $cmd.focus();
    }
    if (e.altKey && (48 <= (_ref = e.which) && _ref <= 57)) {
      irc5.command("/win " + (e.which - 48));
      return e.preventDefault();
    }
  });

  $cmd.keydown(function(e) {
    var cmd;
    if (e.which === 13) {
      cmd = $cmd.val();
      if (cmd.length > 0) {
        $cmd.val('');
        return irc5.command(cmd);
      }
    }
  });

  window.onunload = function() {
    return irc5.quit();
  };

}).call(this);
