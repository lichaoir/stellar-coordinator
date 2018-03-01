ARG NIFI_VERSION=1.5.0

FROM apache/nifi:$NIFI_VERSION

LABEL maintainer="CSIRO Data61"

COPY flow.xml ${NIFI_HOME}/conf/
COPY stellar.properties ${NIFI_HOME}/usr/conf/
COPY stellar-utils.jar ${NIFI_HOME}/usr/bin/

WORKDIR $NIFI_HOME/conf
RUN gzip flow.xml
RUN sed -i -r "s@^(nifi.variable.registry.properties=).*@\1.\/usr\/conf\/stellar.properties@" ${NIFI_HOME}/conf/nifi.properties

WORKDIR $NIFI_HOME
EXPOSE 8000 8080
