COORDINATOR_NAME=stellar-coordinator
STORE_NAME=redis

docker stop $COORDINATOR_NAME $STORE_NAME
docker rm $COORDINATOR_NAME $STORE_NAME
