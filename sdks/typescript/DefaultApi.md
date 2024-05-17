# .DefaultApi

All URIs are relative to *https://dream-gateway.livepeer.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imageToImage**](DefaultApi.md#imageToImage) | **POST** /image-to-image | Image To Image
[**imageToVideo**](DefaultApi.md#imageToVideo) | **POST** /image-to-video | Image To Video
[**textToImage**](DefaultApi.md#textToImage) | **POST** /text-to-image | Text To Image


# **imageToImage**
> ImageResponse imageToImage()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiImageToImageRequest = {
  // string
  prompt: "prompt_example",
  // HttpFile
  image: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string
  modelId: "",
  // number (optional)
  strength: 0.8,
  // number (optional)
  guidanceScale: 7.5,
  // string (optional)
  negativePrompt: "",
  // boolean (optional)
  safetyCheck: true,
  // number (optional)
  seed: 1,
  // number (optional)
  numImagesPerPrompt: 1,
};

apiInstance.imageToImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt** | [**string**] |  | defaults to undefined
 **image** | [**HttpFile**] |  | defaults to undefined
 **modelId** | [**string**] |  | defaults to ''
 **strength** | [**number**] |  | (optional) defaults to 0.8
 **guidanceScale** | [**number**] |  | (optional) defaults to 7.5
 **negativePrompt** | [**string**] |  | (optional) defaults to ''
 **safetyCheck** | [**boolean**] |  | (optional) defaults to true
 **seed** | [**number**] |  | (optional) defaults to undefined
 **numImagesPerPrompt** | [**number**] |  | (optional) defaults to 1


### Return type

**ImageResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imageToVideo**
> VideoResponse imageToVideo()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiImageToVideoRequest = {
  // HttpFile
  image: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // string
  modelId: "",
  // number (optional)
  height: 576,
  // number (optional)
  width: 1024,
  // number (optional)
  fps: 6,
  // number (optional)
  motionBucketId: 127,
  // number (optional)
  noiseAugStrength: 0.02,
  // number (optional)
  seed: 1,
};

apiInstance.imageToVideo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | [**HttpFile**] |  | defaults to undefined
 **modelId** | [**string**] |  | defaults to ''
 **height** | [**number**] |  | (optional) defaults to 576
 **width** | [**number**] |  | (optional) defaults to 1024
 **fps** | [**number**] |  | (optional) defaults to 6
 **motionBucketId** | [**number**] |  | (optional) defaults to 127
 **noiseAugStrength** | [**number**] |  | (optional) defaults to 0.02
 **seed** | [**number**] |  | (optional) defaults to undefined


### Return type

**VideoResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **textToImage**
> ImageResponse textToImage(textToImageParams)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:.DefaultApiTextToImageRequest = {
  // TextToImageParams
  textToImageParams: null,
};

apiInstance.textToImage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textToImageParams** | **TextToImageParams**|  |


### Return type

**ImageResponse**

### Authorization

[HTTPBearer](README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


