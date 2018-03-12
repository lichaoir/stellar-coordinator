# stellar-coordinator
This repository hosts stellar-coordinator, the central coordination module of the [Stellar Graph Analytics platform](https://github.com/data61/stellar) developed by [CSIRO Data61](https://data61.csiro.au). This module takes care of communication between the following components:

* [stellar-ingest](https://github.com/data61/stellar-ingest) (relational to graph conversion)
* [stellar-search](https://github.com/data61/stellar-search) (elasticsearch indexing of graphs)
* [stellar-ERBaseline](https://github.com/data61/stellar-ERBaseline) (entity resolution module)
* [stellar-evaluation-plugins](https://github.com/data61/stellar-evaluation-plugins) (machine learning module)
* [stellar-config](https://github.com/data61/stellar-config) (UI for visual interaction with the platform)
* [stellar-py](https://github.com/data61/stellar-py) (Python client)

## License

Copyright 2017-2018 CSIRO Data61

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

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
