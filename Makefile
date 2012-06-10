all: build

build:
	coffee -c src/*.coffee ircv/src/*.coffee
