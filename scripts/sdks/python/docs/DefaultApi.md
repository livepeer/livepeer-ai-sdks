# livepeer_ai.DefaultApi

All URIs are relative to *https://dream-gateway.livepeer.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**image_to_image**](DefaultApi.md#image_to_image) | **POST** /image-to-image | Image To Image
[**image_to_video**](DefaultApi.md#image_to_video) | **POST** /image-to-video | Image To Video
[**text_to_image**](DefaultApi.md#text_to_image) | **POST** /text-to-image | Text To Image


# **image_to_image**
> ImageResponse image_to_image(prompt, image, model_id, strength=strength, guidance_scale=guidance_scale, negative_prompt=negative_prompt, safety_check=safety_check, seed=seed, num_images_per_prompt=num_images_per_prompt)

Image To Image

### Example

* Bearer Authentication (HTTPBearer):

```python
import livepeer_ai
from livepeer_ai.models.image_response import ImageResponse
from livepeer_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dream-gateway.livepeer.cloud
# See configuration.py for a list of all supported configuration parameters.
configuration = livepeer_ai.Configuration(
    host = "https://dream-gateway.livepeer.cloud"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = livepeer_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with livepeer_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = livepeer_ai.DefaultApi(api_client)
    prompt = 'prompt_example' # str | 
    image = None # bytearray | 
    model_id = '' # str |  (default to '')
    strength = 0.8 # float |  (optional) (default to 0.8)
    guidance_scale = 7.5 # float |  (optional) (default to 7.5)
    negative_prompt = '' # str |  (optional) (default to '')
    safety_check = True # bool |  (optional) (default to True)
    seed = 56 # int |  (optional)
    num_images_per_prompt = 1 # int |  (optional) (default to 1)

    try:
        # Image To Image
        api_response = api_instance.image_to_image(prompt, image, model_id, strength=strength, guidance_scale=guidance_scale, negative_prompt=negative_prompt, safety_check=safety_check, seed=seed, num_images_per_prompt=num_images_per_prompt)
        print("The response of DefaultApi->image_to_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->image_to_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt** | **str**|  | 
 **image** | **bytearray**|  | 
 **model_id** | **str**|  | [default to &#39;&#39;]
 **strength** | **float**|  | [optional] [default to 0.8]
 **guidance_scale** | **float**|  | [optional] [default to 7.5]
 **negative_prompt** | **str**|  | [optional] [default to &#39;&#39;]
 **safety_check** | **bool**|  | [optional] [default to True]
 **seed** | **int**|  | [optional] 
 **num_images_per_prompt** | **int**|  | [optional] [default to 1]

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **image_to_video**
> VideoResponse image_to_video(image, model_id, height=height, width=width, fps=fps, motion_bucket_id=motion_bucket_id, noise_aug_strength=noise_aug_strength, seed=seed)

Image To Video

### Example

* Bearer Authentication (HTTPBearer):

```python
import livepeer_ai
from livepeer_ai.models.video_response import VideoResponse
from livepeer_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dream-gateway.livepeer.cloud
# See configuration.py for a list of all supported configuration parameters.
configuration = livepeer_ai.Configuration(
    host = "https://dream-gateway.livepeer.cloud"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = livepeer_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with livepeer_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = livepeer_ai.DefaultApi(api_client)
    image = None # bytearray | 
    model_id = '' # str |  (default to '')
    height = 576 # int |  (optional) (default to 576)
    width = 1024 # int |  (optional) (default to 1024)
    fps = 6 # int |  (optional) (default to 6)
    motion_bucket_id = 127 # int |  (optional) (default to 127)
    noise_aug_strength = 0.02 # float |  (optional) (default to 0.02)
    seed = 56 # int |  (optional)

    try:
        # Image To Video
        api_response = api_instance.image_to_video(image, model_id, height=height, width=width, fps=fps, motion_bucket_id=motion_bucket_id, noise_aug_strength=noise_aug_strength, seed=seed)
        print("The response of DefaultApi->image_to_video:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->image_to_video: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **bytearray**|  | 
 **model_id** | **str**|  | [default to &#39;&#39;]
 **height** | **int**|  | [optional] [default to 576]
 **width** | **int**|  | [optional] [default to 1024]
 **fps** | **int**|  | [optional] [default to 6]
 **motion_bucket_id** | **int**|  | [optional] [default to 127]
 **noise_aug_strength** | **float**|  | [optional] [default to 0.02]
 **seed** | **int**|  | [optional] 

### Return type

[**VideoResponse**](VideoResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **text_to_image**
> ImageResponse text_to_image(text_to_image_params)

Text To Image

### Example

* Bearer Authentication (HTTPBearer):

```python
import livepeer_ai
from livepeer_ai.models.image_response import ImageResponse
from livepeer_ai.models.text_to_image_params import TextToImageParams
from livepeer_ai.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dream-gateway.livepeer.cloud
# See configuration.py for a list of all supported configuration parameters.
configuration = livepeer_ai.Configuration(
    host = "https://dream-gateway.livepeer.cloud"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization: HTTPBearer
configuration = livepeer_ai.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with livepeer_ai.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = livepeer_ai.DefaultApi(api_client)
    text_to_image_params = livepeer_ai.TextToImageParams() # TextToImageParams | 

    try:
        # Text To Image
        api_response = api_instance.text_to_image(text_to_image_params)
        print("The response of DefaultApi->text_to_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->text_to_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_to_image_params** | [**TextToImageParams**](TextToImageParams.md)|  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

