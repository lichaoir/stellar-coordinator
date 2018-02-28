if [ $# -ne 1 ]
then
  echo "Usage: $(basename $0) STELLAR_VERSION"
  exit 1
fi

COORDINATOR_NAME=stellar-coordinator
STORE_NAME=redis
NETWORK_NAME=stellar
STELLAR_VERSION=$1

echo "Creating network $NETWORK_NAME..."
docker network create $NETWORK_NAME

echo "Trying to start container $STORE_NAME..."
if docker container start $STORE_NAME
then
  echo "Done."
else
  echo "Trying to start a new container with name $STORE_NAME..."
  if docker run -d -p 6379:6379 --name $STORE_NAME --hostname $STORE_NAME --network $NETWORK_NAME redis:alpine
  then
    echo "Done."
  fi
fi

if docker start $COORDINATOR_NAME
then
  echo "Done."
else
  echo "Trying to start a new container named $COORDINATOR_NAME..."
  if docker run -d \
    -p 8000:8000 \
    -p 8080:8080 \
    -v /tmp/stellar:/tmp/stellar \
    --name $COORDINATOR_NAME \
    --hostname $COORDINATOR_NAME \
    --network $NETWORK_NAME \
    data61/$COORDINATOR_NAME:$STELLAR_VERSION
  then
    echo "Done."
  fi
fi
