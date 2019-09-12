PWD ?= pwd_unknown

THIS_FILE := $(lastword $(MAKEFILE_LIST))
CMD_ARGUMENTS ?= $(cmd)

target = latest

help:
	@echo ''
	@echo 'Usage: make [TARGET] [EXTRA_ARGUMENTS]'
	@echo 'Targets:'
	@echo '  build    	build docker target=latest'
	@echo '  pull    	pull from git'
	@echo '  help    	this message'

build:
	@echo  'Building docker image'
	docker build -t pp-fe:$(target) .

pull:
	git pull