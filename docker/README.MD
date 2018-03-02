## Prerequisites
* Install [Docker](www.docker.com) and [Docker Compose](https://docs.docker.com/compose/).

## How to use
1. Open a terminal in this directory, run `dockerize.sh`. This will build a docker image with Git repository as its repository.
2. Run `docker-compose up -d`.
3. Nifi will be started on port `8080`.

## Dev guide
* Nifi config is stored and checked in at `nifi/conf/flow.xml`. Update this file when NIFI flow has been updated.
