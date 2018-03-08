# stellar-coordinator
The coordination module of Stellar project.

## Development

### Apache NiFi

This project is being developed on Apache NiFi 1.5.0. Please visit [Apache NiFi Downloads](https://nifi.apache.org/download.html) to get the binaries for setting up development environment.

### Configuration

Before starting the development NiFi instance, edit `conf/nifi.properties` to register project variables:

```INI
nifi.variable.registry.properties=/path/to/stellar-coordinator/nifi/conf/stellar.properties
```

### Running NiFi Instance

To run the NiFi Instance: `bin/nifi.sh run`. For other ways of starting NiFi instances, please refer to [Getting Started](http://nifi.apache.org/docs/nifi-docs/html/getting-started.html#starting-nifi).

### Setting Up Data Flow

The data flow of the coordinator is persisted in this repository at `nifi/conf/flow.xml`. To update a NiFi instance's data flow, first stop the NiFi instance. Then copy the `flow.xml` file to the NiFi instance's `conf/` directory and gzip it to replace the existing `flow.xml.gz` file there. Finally start the NiFi instance and it should pick up the new data flow automatically.
