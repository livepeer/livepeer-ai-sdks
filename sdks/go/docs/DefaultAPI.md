# \DefaultAPI

All URIs are relative to *https://dream-gateway.livepeer.cloud*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ImageToImage**](DefaultAPI.md#ImageToImage) | **Post** /image-to-image | Image To Image
[**ImageToVideo**](DefaultAPI.md#ImageToVideo) | **Post** /image-to-video | Image To Video
[**TextToImage**](DefaultAPI.md#TextToImage) | **Post** /text-to-image | Text To Image



## ImageToImage

> ImageResponse ImageToImage(ctx).Prompt(prompt).Image(image).ModelId(modelId).Strength(strength).GuidanceScale(guidanceScale).NegativePrompt(negativePrompt).SafetyCheck(safetyCheck).Seed(seed).NumImagesPerPrompt(numImagesPerPrompt).Execute()

Image To Image

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	prompt := "prompt_example" // string | 
	image := os.NewFile(1234, "some_file") // *os.File | 
	modelId := "modelId_example" // string |  (default to "")
	strength := float32(8.14) // float32 |  (optional) (default to 0.8)
	guidanceScale := float32(8.14) // float32 |  (optional) (default to 7.5)
	negativePrompt := "negativePrompt_example" // string |  (optional) (default to "")
	safetyCheck := true // bool |  (optional) (default to true)
	seed := int32(56) // int32 |  (optional)
	numImagesPerPrompt := int32(56) // int32 |  (optional) (default to 1)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ImageToImage(context.Background()).Prompt(prompt).Image(image).ModelId(modelId).Strength(strength).GuidanceScale(guidanceScale).NegativePrompt(negativePrompt).SafetyCheck(safetyCheck).Seed(seed).NumImagesPerPrompt(numImagesPerPrompt).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ImageToImage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImageToImage`: ImageResponse
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ImageToImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImageToImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prompt** | **string** |  | 
 **image** | ***os.File** |  | 
 **modelId** | **string** |  | [default to &quot;&quot;]
 **strength** | **float32** |  | [default to 0.8]
 **guidanceScale** | **float32** |  | [default to 7.5]
 **negativePrompt** | **string** |  | [default to &quot;&quot;]
 **safetyCheck** | **bool** |  | [default to true]
 **seed** | **int32** |  | 
 **numImagesPerPrompt** | **int32** |  | [default to 1]

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ImageToVideo

> VideoResponse ImageToVideo(ctx).Image(image).ModelId(modelId).Height(height).Width(width).Fps(fps).MotionBucketId(motionBucketId).NoiseAugStrength(noiseAugStrength).Seed(seed).Execute()

Image To Video

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	image := os.NewFile(1234, "some_file") // *os.File | 
	modelId := "modelId_example" // string |  (default to "")
	height := int32(56) // int32 |  (optional) (default to 576)
	width := int32(56) // int32 |  (optional) (default to 1024)
	fps := int32(56) // int32 |  (optional) (default to 6)
	motionBucketId := int32(56) // int32 |  (optional) (default to 127)
	noiseAugStrength := float32(8.14) // float32 |  (optional) (default to 0.02)
	seed := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ImageToVideo(context.Background()).Image(image).ModelId(modelId).Height(height).Width(width).Fps(fps).MotionBucketId(motionBucketId).NoiseAugStrength(noiseAugStrength).Seed(seed).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ImageToVideo``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ImageToVideo`: VideoResponse
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ImageToVideo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiImageToVideoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | ***os.File** |  | 
 **modelId** | **string** |  | [default to &quot;&quot;]
 **height** | **int32** |  | [default to 576]
 **width** | **int32** |  | [default to 1024]
 **fps** | **int32** |  | [default to 6]
 **motionBucketId** | **int32** |  | [default to 127]
 **noiseAugStrength** | **float32** |  | [default to 0.02]
 **seed** | **int32** |  | 

### Return type

[**VideoResponse**](VideoResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TextToImage

> ImageResponse TextToImage(ctx).TextToImageParams(textToImageParams).Execute()

Text To Image

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	textToImageParams := *openapiclient.NewTextToImageParams("ModelId_example", "Prompt_example") // TextToImageParams | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.TextToImage(context.Background()).TextToImageParams(textToImageParams).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.TextToImage``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TextToImage`: ImageResponse
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.TextToImage`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTextToImageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **textToImageParams** | [**TextToImageParams**](TextToImageParams.md) |  | 

### Return type

[**ImageResponse**](ImageResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

