## Prerequisites
* Install [Docker](www.docker.com) and [Docker Compose](https://docs.docker.com/compose/)

## How to use
1. Open a terminal in this directory, run `docker build . -t stellar-coordinator --rm`. This will build a docker image named "stellar-coordinator".
2. Run `docker-compose up`
3. Nifi will be started on port `8080`

## Dev guide
1. Nifi config is stored and checked in at `nifi/conf/flow.xml.gz`. Update this file when NIFI flow has been updated
2. The `docker` folder is self-contained and it clones the source code from `master` branch and uses files downloaded to build the docker image.
 If developing in a different branch, push your branch and change the `BRANCH` variable in `Dockerfile` and the Github URL to match your branch.
