PWD ?= pwd_unknown

THIS_FILE := $(lastword $(MAKEFILE_LIST))
CMD_ARGUMENTS ?= $(cmd)

target = latest

help:
	@echo ''
	@echo 'Usage: make [TARGET] [EXTRA_ARGUMENTS]'
	@echo 'Targets:'
	@echo '  build-prod build docker for production'
	@echo '  build-prod build docker for accepatance'
	@echo '  build-acc  build docker target=latest'
	@echo '  pull    	pull from git'
	@echo '  help    	this message'

build-prod:
	@echo  'Building docker image for production'
	docker build --build-arg ENVIRONMENT=production -t pp-fe:production .
build-acc:
	@echo  'Building docker image for accepatance'
	docker build --build-arg ENVIRONMENT=acceptance -t pp-fe:acceptance .
build:
	@echo  'Building docker image'
	docker build --build-arg ENVIRONMENT=acceptance -t pp-fe:$(target) .	

pull:
	git pull