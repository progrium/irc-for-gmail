# IRC for Gmail (experimental)

This is an IRC client for Gmail. It's based around a Chrome app that
uses the experimental socket support in Chrome. **It may stop working in
a future version of Chrome as it is experimental!**

## Installing

**Currently requires the dev channel version of Chrome, or Canary**

First you need to enable Experimental Extension APIs in Chrome. You can do
this by going to chrome://flags and searching for "Experimental Extension
APIs" and clicking Enable. You'll have to restart Chrome.

Now you can download and install the extension. It's currently available
as a package here: https://github.com/progrium/irc-for-gmail/downloads

It should download, ask for permissions, and then it should show up when
you use Gmail.

## Using IRC

The client is very minimal. You can currently just connect to a server,
change your nick, join channels, and chat. You can also list names of
who is in a room since there is currently no list in the UI. For a list
of commands, type /help in the chat box. 

## Contributing

This project mostly wraps another standalone IRC client for Chrome. Most
of the IRC client specific stuff is there. This app just packages it up
to be used in Gmail.
