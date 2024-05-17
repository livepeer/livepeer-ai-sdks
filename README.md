# Livepeer AI SDKs

> [!NOTE]
> These SDKs are auto-generated and have not been rigorously tested or verified by the AI SPE team. They may contain bugs or issues.

Welcome to the repository for auto-generated client SDKs for interacting with the [Livepeer AI Subnet](https://docs.livepeer.ai/developers/introduction). These SDKs are generated from the [OpenAPI specification](https://github.com/livepeer/ai-worker/blob/main/runner/openapi.json) using the [OpenAPI Generator](https://openapi-generator.tech/docs/installation) tool.

## Supported SDKs

The following SDKs are currently available:

- [Go](/sdks/go/)
- [JavaScript](/sdks/javascript/)
- [Python](/sdks/python/)
- [Ruby](/sdks/ruby/)
- [TypeScript](/sdks/typescript/)

> [!TIP]
> If the client SDK you need is not available, you can generate it using the OpenAPI Generator tool and submit [a pull request](https://github.com/rickstaa/livepeer-ai-sdks/compare) to add it to this repository.

## Generating the SDKs

To generate the SDKs, follow these steps:

1. Install the OpenAPI Generator tool. You can find the installation instructions [here](https://openapi-generator.tech/docs/installation).
2. Install [JDK 9 or later](https://openjdk.org/install/).
3. Execute the following command to generate the Python Client SDK:

```bash
npx @openapitools/openapi-generator-cli generate -i openapi_gateway.json -g python -o sdks/python-typed -p packageName=livepeer_ai
```

## Using the SDKs

To use the SDKs, navigate to the `sdks` directory and then to the specific client directory for the SDK you wish to use. For example, to use the Python SDK, navigate to the [sdks/python](/sdks/python/) directory. Within this directory, you'll find documentation specific to the Python SDK.

### Installing the SDK

To install the Python SDK, run:

```bash
cd sdks/python
pip install .
```

### Importing the SDK

After installation, you can import the SDK in your code as follows:

```python
import livepeer_ai
```

For additional information and documentation, refer to the respective SDK directories within the `sdks` folder.
