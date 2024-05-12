# Livepeer AI SDKs

> [!NOTE]
> These SDKs are auto-generated and have not been officially tested or verified by the AI SPE team. They may contain bugs or issues.

This repository houses auto-generated client SDKs for interacting with the [Livepeer AI Subnet](https://docs.livepeer.ai/developers/introduction). The SDKs are generated from the [OpenAPI specification](https://github.com/livepeer/ai-worker/blob/main/runner/openapi.json) using the [OpenAPI Generator](https://openapi-generator.tech/docs/installation) tool.

## Generating the SDKs

Follow these steps to generate the SDKs:

1. Install the OpenAPI Generator tool. You can find the installation instructions [here](https://openapi-generator.tech/docs/installation).
2. Install [JDK 9 or later](https://openjdk.org/install/).
3. Execute the following command to generate the Python Client SDK:

```bash
npx @openapitools/openapi-generator-cli generate -i openapi_gateway.json -g python -o sdks/python
```

## Using the SDKs

To use the `SDKs`, navigate to the sdks directory and then to the client directory for the SDK you wish to use. Here, you can install the SDK as you would for any package in the respective language. For instance, to install the Python SDK:

```bash
cd sdks/python
pip install .
```

After installation, you can import the SDK in your code as follows:

```python
import livepeer_ai
```

This version provides a clearer distinction between sections, uses more formal language, and improves the flow of information.
