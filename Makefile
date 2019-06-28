OS := $(shell uname)

start_dev:
ifeq ($(OS),Darwin)
	docker volume create --name=app-sync-coding3
	docker-compose -f docker/docker-compose-dev.yml up -d
	docker-sync start
else
	docker-compose -f docker/docker-compose.yml up -d
endif

stop_dev:           ## Stop the Docker containers
ifeq ($(OS),Darwin)
	docker-compose -f docker/docker-compose-dev.yml down
	docker-sync stop
else
	docker-compose -f docker/docker-compose.yml down
endif

no-sync:
	docker-compose -f docker/docker-compose.yml up -d