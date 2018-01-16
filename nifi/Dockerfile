ARG NIFI_VERSION=1.5.0

FROM apache/nifi:${NIFI_VERSION}

LABEL maintainer="CSIRO Data61"

COPY ./conf/stellar.properties ${NIFI_HOME}/conf
COPY ./conf/flow.xml.gz ${NIFI_HOME}/conf
COPY ./templates ${NIFI_HOME}/templates/stellar-coordinator.xml

USER root

ENV REDIS_DOWNLOAD_URL http://download.redis.io/releases/redis-4.0.6.tar.gz

RUN sed -i -r "s@^(nifi.variable.registry.properties=).*@\1$NIFI_HOME\/conf\/stellar.properties@" $NIFI_HOME/conf/nifi.properties \
  && chown -R nifi:nifi ${NIFI_HOME}

USER nifi