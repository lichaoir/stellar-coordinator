# GetZkNode Apache NiFi Processor

This project implements a processor for getting a znode's value from an Apache ZooKeeper service.

In the following description, root directory refers to `getzknode` directory in the code repository and all paths are relative to this root directory unless explicitly mentioned otherwise.

## Project Structure

All user code should be put into `nifi-getzknode-lib` subproject. The other subprojects and the parent POM file are provided as templates from Apache NiFi. When making modifications, please check that the version numbers, artifact IDs and group IDs are consistent among all POM files and sbt configuration files.

## Build

1. Go to `nifi-getzknode-lib/` directory and run `sbt publish`.
2. Go to root directory and run `mvn package`.

## Deploy

Copy the `.nar` file in `nifi-getzknode-nar/target/` directory to the Apache NiFi service's `lib` directory.
