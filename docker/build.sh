if [ $# -ne 2 ]
then
  echo "Usage: $(basename $0) DOCKERFILE_DIR STELLAR_VERSION"
  exit 1
fi

DOCKERFILE_DIR=$1
STELLAR_VERSION=$2

DOCKERFILE_PATH=$DOCKERFILE_DIR/Dockerfile

if [ ! -e $DOCKERFILE_PATH ]
then
  echo "$DOCKERFILE_PATH does not exist."
fi

CONTEXT_DIR=$(mktemp -d)

echo "Copying $DOCKERFILE_PATH to $CONTEXT_DIR ..."
cp $DOCKERFILE_PATH $CONTEXT_DIR

echo "Copying $DOCKERFILE_DIR/../nifi/conf/* to $CONTEXT_DIR ..."
cp $DOCKERFILE_DIR/../nifi/conf/* $CONTEXT_DIR

docker build -t data61/stellar-coordinator:$STELLAR_VERSION $CONTEXT_DIR

rm -rf $CONTEXT_DIR
