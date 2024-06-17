# VideoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**images** | [**List[Media]**](Media.md) |  | 

## Example

```python
from livepeer_ai.models.video_response import VideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VideoResponse from a JSON string
video_response_instance = VideoResponse.from_json(json)
# print the JSON string representation of the object
print(VideoResponse.to_json())

# convert the object into a dict
video_response_dict = video_response_instance.to_dict()
# create an instance of VideoResponse from a dict
video_response_from_dict = VideoResponse.from_dict(video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


