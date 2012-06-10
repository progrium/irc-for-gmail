irc5 = new client.IRC5
irc5.onStatus = (status) ->
  $('#status').text(status)
  window.parent.postMessage {status}, "https://mail.google.com"

$cmd = $('#cmd')
$cmd.focus()
$(window).keydown (e) ->
  unless e.metaKey or e.ctrlKey
    e.currentTarget = $('#cmd')[0]
    $cmd.focus()
  if e.altKey and 48 <= e.which <= 57
    irc5.command("/win " + (e.which - 48))
    e.preventDefault()
$cmd.keydown (e) ->
  if e.which == 13
    cmd = $cmd.val()
    if cmd.length > 0
      $cmd.val('')
      irc5.command cmd

window.onunload = ->
  irc5.quit()
