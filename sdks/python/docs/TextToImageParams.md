# TextToImageParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_id** | **str** |  | [default to '']
**prompt** | **str** |  | 
**height** | **int** |  | [optional] 
**width** | **int** |  | [optional] 
**guidance_scale** | **float** |  | [optional] [default to 7.5]
**negative_prompt** | **str** |  | [optional] [default to '']
**seed** | **int** |  | [optional] 
**num_images_per_prompt** | **int** |  | [optional] [default to 1]

## Example

```python
from livepeer_ai.models.text_to_image_params import TextToImageParams

# TODO update the JSON string below
json = "{}"
# create an instance of TextToImageParams from a JSON string
text_to_image_params_instance = TextToImageParams.from_json(json)
# print the JSON string representation of the object
print(TextToImageParams.to_json())

# convert the object into a dict
text_to_image_params_dict = text_to_image_params_instance.to_dict()
# create an instance of TextToImageParams from a dict
text_to_image_params_from_dict = TextToImageParams.from_dict(text_to_image_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


