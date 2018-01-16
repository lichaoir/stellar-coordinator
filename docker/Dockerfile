ARG NIFI_VERSION=1.5.0

FROM apache/nifi:${NIFI_VERSION}

LABEL maintainer="CSIRO Data61"

ARG BRANCH=SERENE-709

RUN curl -Lo src.zip https://github.com/seanli3/stellar-coordinator/archive/$BRANCH.zip \
  && unzip src.zip -d src \
  && cp ./src/stellar-coordinator-$BRANCH/nifi/conf/stellar.properties ${NIFI_HOME}/conf \
  && cp ./src/stellar-coordinator-$BRANCH/nifi/conf/flow.xml.gz ${NIFI_HOME}/conf \
  && rm -rf src.zip src/

USER root

RUN sed -i -r "s@^(nifi.variable.registry.properties=).*@\1$NIFI_HOME\/conf\/stellar.properties@" $NIFI_HOME/conf/nifi.properties \
  && chown -R nifi:nifi ${NIFI_HOME}

USER nifi