# OpenapiClient::TextToImageParams

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **model_id** | **String** |  | [default to &#39;&#39;] |
| **prompt** | **String** |  |  |
| **height** | **Integer** |  | [optional] |
| **width** | **Integer** |  | [optional] |
| **guidance_scale** | **Float** |  | [optional][default to 7.5] |
| **negative_prompt** | **String** |  | [optional][default to &#39;&#39;] |
| **safety_check** | **Boolean** |  | [optional][default to true] |
| **seed** | **Integer** |  | [optional] |
| **num_inference_steps** | **Integer** |  | [optional][default to 50] |
| **num_images_per_prompt** | **Integer** |  | [optional][default to 1] |

## Example

```ruby
require 'openapi_client'

instance = OpenapiClient::TextToImageParams.new(
  model_id: null,
  prompt: null,
  height: null,
  width: null,
  guidance_scale: null,
  negative_prompt: null,
  safety_check: null,
  seed: null,
  num_inference_steps: null,
  num_images_per_prompt: null
)
```

