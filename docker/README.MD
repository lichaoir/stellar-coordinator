## Prerequisites
* Install [Docker](www.docker.com) and [Docker Compose](https://docs.docker.com/compose/).

## How to use
1. Open a terminal in this directory, run `dockerize.sh`. This will build a docker image with Git repository as its repository.
2. Run `docker-compose up -d`.
3. Nifi will be started on port `8080`.
4. Two environment variables can be used to change docker image repository and tag: COORDINATOR_REPOSITORY and COORDINATOR_TAG. By default, they point to data61/stellar-coordinator:latest.

## Dev guide
* Nifi data flow is located at `nifi/conf/flow.xml`. Update this file before building a new docker image during development.
