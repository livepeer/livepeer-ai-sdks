# LivepeerAiRunner.DefaultApi

All URIs are relative to *https://dream-gateway.livepeer.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageToImage**](DefaultApi.md#imageToImage) | **POST** /image-to-image | Image To Image
[**imageToVideo**](DefaultApi.md#imageToVideo) | **POST** /image-to-video | Image To Video
[**textToImage**](DefaultApi.md#textToImage) | **POST** /text-to-image | Text To Image



## imageToImage

> ImageResponse imageToImage(prompt, image, modelId, opts)

Image To Image

### Example

```javascript
import LivepeerAiRunner from 'livepeer_ai_runner';
let defaultClient = LivepeerAiRunner.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LivepeerAiRunner.DefaultApi();
let prompt = "prompt_example"; // String | 
let image = "/path/to/file"; // File | 
let modelId = "''"; // String | 
let opts = {
  'strength': 0.8, // Number | 
  'guidanceScale': 7.5, // Number | 
  'negativePrompt': "''", // String | 
  'safetyCheck': true, // Boolean | 
  'seed': 56, // Number | 
  'numImagesPerPrompt': 1 // Number | 
};
apiInstance.imageToImage(prompt, image, modelId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt** | **String**|  | 
 **image** | **File**|  | 
 **modelId** | **String**|  | [default to &#39;&#39;]
 **strength** | **Number**|  | [optional] [default to 0.8]
 **guidanceScale** | **Number**|  | [optional] [default to 7.5]
 **negativePrompt** | **String**|  | [optional] [default to &#39;&#39;]
 **safetyCheck** | **Boolean**|  | [optional] [default to true]
 **seed** | **Number**|  | [optional] 
 **numImagesPerPrompt** | **Number**|  | [optional] [default to 1]

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## imageToVideo

> VideoResponse imageToVideo(image, modelId, opts)

Image To Video

### Example

```javascript
import LivepeerAiRunner from 'livepeer_ai_runner';
let defaultClient = LivepeerAiRunner.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LivepeerAiRunner.DefaultApi();
let image = "/path/to/file"; // File | 
let modelId = "''"; // String | 
let opts = {
  'height': 576, // Number | 
  'width': 1024, // Number | 
  'fps': 6, // Number | 
  'motionBucketId': 127, // Number | 
  'noiseAugStrength': 0.02, // Number | 
  'seed': 56 // Number | 
};
apiInstance.imageToVideo(image, modelId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**|  | 
 **modelId** | **String**|  | [default to &#39;&#39;]
 **height** | **Number**|  | [optional] [default to 576]
 **width** | **Number**|  | [optional] [default to 1024]
 **fps** | **Number**|  | [optional] [default to 6]
 **motionBucketId** | **Number**|  | [optional] [default to 127]
 **noiseAugStrength** | **Number**|  | [optional] [default to 0.02]
 **seed** | **Number**|  | [optional] 

### Return type

[**VideoResponse**](VideoResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## textToImage

> ImageResponse textToImage(textToImageParams)

Text To Image

### Example

```javascript
import LivepeerAiRunner from 'livepeer_ai_runner';
let defaultClient = LivepeerAiRunner.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LivepeerAiRunner.DefaultApi();
let textToImageParams = new LivepeerAiRunner.TextToImageParams(); // TextToImageParams | 
apiInstance.textToImage(textToImageParams, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textToImageParams** | [**TextToImageParams**](TextToImageParams.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

