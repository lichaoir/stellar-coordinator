# stellar-coordinator
The coordination module of Stellar project.

## Development

### Apache NiFi

This project is being developed on Apache NiFi 1.4.0. Please visit [Apache NiFi Downloads](https://nifi.apache.org/download.html) to get the binaries for setting up development environment.

### Configuration

Before starting the development NiFi instance, edit `conf/nifi.properties` to register project variables:

```INI
nifi.variable.registry.properties=/path/to/stellar-coordinator/nifi/conf/stellar.properties
```

### Running NiFi Instance

To run the NiFi Instance: `bin/nifi.sh run`. For other ways of starting NiFi instances, please refer to [Getting Started](http://nifi.apache.org/docs/nifi-docs/html/getting-started.html#starting-nifi).

### Setting Up Data Flow

The data flow of the coordinator is persisted to a template file at `nifi/templates/stellar-coordinator.xml`. By importing this template, adding it the the canvas and starting all components, a coordinator data flow will be ready to use.

On how to use the template and start the components, please refer to [User Guide](http://nifi.apache.org/docs/nifi-docs/html/user-guide.html#building-dataflow).
