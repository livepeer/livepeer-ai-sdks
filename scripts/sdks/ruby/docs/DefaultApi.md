# OpenapiClient::DefaultApi

All URIs are relative to *https://dream-gateway.livepeer.cloud*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**image_to_image**](DefaultApi.md#image_to_image) | **POST** /image-to-image | Image To Image |
| [**image_to_video**](DefaultApi.md#image_to_video) | **POST** /image-to-video | Image To Video |
| [**text_to_image**](DefaultApi.md#text_to_image) | **POST** /text-to-image | Text To Image |
| [**upscale**](DefaultApi.md#upscale) | **POST** /upscale | Upscale |


## image_to_image

> <ImageResponse> image_to_image(prompt, image, model_id, opts)

Image To Image

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
prompt = 'prompt_example' # String | 
image = File.new('/path/to/some/file') # File | 
model_id = 'model_id_example' # String | 
opts = {
  strength: 8.14, # Float | 
  guidance_scale: 8.14, # Float | 
  image_guidance_scale: 8.14, # Float | 
  negative_prompt: 'negative_prompt_example', # String | 
  safety_check: true, # Boolean | 
  seed: 56, # Integer | 
  num_images_per_prompt: 56 # Integer | 
}

begin
  # Image To Image
  result = api_instance.image_to_image(prompt, image, model_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->image_to_image: #{e}"
end
```

#### Using the image_to_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ImageResponse>, Integer, Hash)> image_to_image_with_http_info(prompt, image, model_id, opts)

```ruby
begin
  # Image To Image
  data, status_code, headers = api_instance.image_to_image_with_http_info(prompt, image, model_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ImageResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->image_to_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **prompt** | **String** |  |  |
| **image** | **File** |  |  |
| **model_id** | **String** |  | [default to &#39;&#39;] |
| **strength** | **Float** |  | [optional][default to 0.8] |
| **guidance_scale** | **Float** |  | [optional][default to 7.5] |
| **image_guidance_scale** | **Float** |  | [optional][default to 1.5] |
| **negative_prompt** | **String** |  | [optional][default to &#39;&#39;] |
| **safety_check** | **Boolean** |  | [optional][default to true] |
| **seed** | **Integer** |  | [optional] |
| **num_images_per_prompt** | **Integer** |  | [optional][default to 1] |

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## image_to_video

> <VideoResponse> image_to_video(image, model_id, opts)

Image To Video

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
image = File.new('/path/to/some/file') # File | 
model_id = 'model_id_example' # String | 
opts = {
  height: 56, # Integer | 
  width: 56, # Integer | 
  fps: 56, # Integer | 
  motion_bucket_id: 56, # Integer | 
  noise_aug_strength: 8.14, # Float | 
  seed: 56, # Integer | 
  safety_check: true # Boolean | 
}

begin
  # Image To Video
  result = api_instance.image_to_video(image, model_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->image_to_video: #{e}"
end
```

#### Using the image_to_video_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<VideoResponse>, Integer, Hash)> image_to_video_with_http_info(image, model_id, opts)

```ruby
begin
  # Image To Video
  data, status_code, headers = api_instance.image_to_video_with_http_info(image, model_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <VideoResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->image_to_video_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **image** | **File** |  |  |
| **model_id** | **String** |  | [default to &#39;&#39;] |
| **height** | **Integer** |  | [optional][default to 576] |
| **width** | **Integer** |  | [optional][default to 1024] |
| **fps** | **Integer** |  | [optional][default to 6] |
| **motion_bucket_id** | **Integer** |  | [optional][default to 127] |
| **noise_aug_strength** | **Float** |  | [optional][default to 0.02] |
| **seed** | **Integer** |  | [optional] |
| **safety_check** | **Boolean** |  | [optional][default to true] |

### Return type

[**VideoResponse**](VideoResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## text_to_image

> <ImageResponse> text_to_image(text_to_image_params)

Text To Image

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
text_to_image_params = OpenapiClient::TextToImageParams.new({model_id: 'model_id_example', prompt: 'prompt_example'}) # TextToImageParams | 

begin
  # Text To Image
  result = api_instance.text_to_image(text_to_image_params)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->text_to_image: #{e}"
end
```

#### Using the text_to_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ImageResponse>, Integer, Hash)> text_to_image_with_http_info(text_to_image_params)

```ruby
begin
  # Text To Image
  data, status_code, headers = api_instance.text_to_image_with_http_info(text_to_image_params)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ImageResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->text_to_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **text_to_image_params** | [**TextToImageParams**](TextToImageParams.md) |  |  |

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## upscale

> <ImageResponse> upscale(prompt, image, model_id, opts)

Upscale

### Examples

```ruby
require 'time'
require 'openapi_client'
# setup authorization
OpenapiClient.configure do |config|
  # Configure Bearer authorization: HTTPBearer
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = OpenapiClient::DefaultApi.new
prompt = 'prompt_example' # String | 
image = File.new('/path/to/some/file') # File | 
model_id = 'model_id_example' # String | 
opts = {
  safety_check: true, # Boolean | 
  seed: 56 # Integer | 
}

begin
  # Upscale
  result = api_instance.upscale(prompt, image, model_id, opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->upscale: #{e}"
end
```

#### Using the upscale_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ImageResponse>, Integer, Hash)> upscale_with_http_info(prompt, image, model_id, opts)

```ruby
begin
  # Upscale
  data, status_code, headers = api_instance.upscale_with_http_info(prompt, image, model_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ImageResponse>
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->upscale_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **prompt** | **String** |  |  |
| **image** | **File** |  |  |
| **model_id** | **String** |  | [default to &#39;&#39;] |
| **safety_check** | **Boolean** |  | [optional][default to true] |
| **seed** | **Integer** |  | [optional] |

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

