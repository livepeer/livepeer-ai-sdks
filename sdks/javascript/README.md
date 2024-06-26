# livepeer_ai_runner

LivepeerAiRunner - JavaScript client for livepeer_ai_runner
An application to run AI pipelines
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 0.1.0
- Generator version: 7.5.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install livepeer_ai_runner --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your livepeer_ai_runner from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LivepeerAiRunner = require('livepeer_ai_runner');

var defaultClient = LivepeerAiRunner.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
var HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

var api = new LivepeerAiRunner.DefaultApi()
var prompt = "prompt_example"; // {String} 
var image = "/path/to/file"; // {File} 
var modelId = "''"; // {String} 
var opts = {
  'strength': 0.8, // {Number} 
  'guidanceScale': 7.5, // {Number} 
  'imageGuidanceScale': 1.5, // {Number} 
  'negativePrompt': "''", // {String} 
  'safetyCheck': true, // {Boolean} 
  'seed': 56, // {Number} 
  'numImagesPerPrompt': 1 // {Number} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.imageToImage(prompt, image, modelId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://dream-gateway.livepeer.cloud*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LivepeerAiRunner.DefaultApi* | [**imageToImage**](docs/DefaultApi.md#imageToImage) | **POST** /image-to-image | Image To Image
*LivepeerAiRunner.DefaultApi* | [**imageToVideo**](docs/DefaultApi.md#imageToVideo) | **POST** /image-to-video | Image To Video
*LivepeerAiRunner.DefaultApi* | [**textToImage**](docs/DefaultApi.md#textToImage) | **POST** /text-to-image | Text To Image
*LivepeerAiRunner.DefaultApi* | [**upscale**](docs/DefaultApi.md#upscale) | **POST** /upscale | Upscale


## Documentation for Models

 - [LivepeerAiRunner.APIError](docs/APIError.md)
 - [LivepeerAiRunner.HTTPError](docs/HTTPError.md)
 - [LivepeerAiRunner.HTTPValidationError](docs/HTTPValidationError.md)
 - [LivepeerAiRunner.HealthCheck](docs/HealthCheck.md)
 - [LivepeerAiRunner.ImageResponse](docs/ImageResponse.md)
 - [LivepeerAiRunner.Media](docs/Media.md)
 - [LivepeerAiRunner.TextToImageParams](docs/TextToImageParams.md)
 - [LivepeerAiRunner.ValidationError](docs/ValidationError.md)
 - [LivepeerAiRunner.ValidationErrorLocInner](docs/ValidationErrorLocInner.md)
 - [LivepeerAiRunner.VideoResponse](docs/VideoResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### HTTPBearer

- **Type**: Bearer authentication

