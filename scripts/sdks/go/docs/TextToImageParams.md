# TextToImageParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModelId** | **string** |  | [default to ""]
**Prompt** | **string** |  | 
**Height** | Pointer to **int32** |  | [optional] 
**Width** | Pointer to **int32** |  | [optional] 
**GuidanceScale** | Pointer to **float32** |  | [optional] [default to 7.5]
**NegativePrompt** | Pointer to **string** |  | [optional] [default to ""]
**SafetyCheck** | Pointer to **bool** |  | [optional] [default to true]
**Seed** | Pointer to **int32** |  | [optional] 
**NumInferenceSteps** | Pointer to **int32** |  | [optional] [default to 50]
**NumImagesPerPrompt** | Pointer to **int32** |  | [optional] [default to 1]

## Methods

### NewTextToImageParams

`func NewTextToImageParams(modelId string, prompt string, ) *TextToImageParams`

NewTextToImageParams instantiates a new TextToImageParams object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTextToImageParamsWithDefaults

`func NewTextToImageParamsWithDefaults() *TextToImageParams`

NewTextToImageParamsWithDefaults instantiates a new TextToImageParams object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetModelId

`func (o *TextToImageParams) GetModelId() string`

GetModelId returns the ModelId field if non-nil, zero value otherwise.

### GetModelIdOk

`func (o *TextToImageParams) GetModelIdOk() (*string, bool)`

GetModelIdOk returns a tuple with the ModelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelId

`func (o *TextToImageParams) SetModelId(v string)`

SetModelId sets ModelId field to given value.


### GetPrompt

`func (o *TextToImageParams) GetPrompt() string`

GetPrompt returns the Prompt field if non-nil, zero value otherwise.

### GetPromptOk

`func (o *TextToImageParams) GetPromptOk() (*string, bool)`

GetPromptOk returns a tuple with the Prompt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrompt

`func (o *TextToImageParams) SetPrompt(v string)`

SetPrompt sets Prompt field to given value.


### GetHeight

`func (o *TextToImageParams) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *TextToImageParams) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *TextToImageParams) SetHeight(v int32)`

SetHeight sets Height field to given value.

### HasHeight

`func (o *TextToImageParams) HasHeight() bool`

HasHeight returns a boolean if a field has been set.

### GetWidth

`func (o *TextToImageParams) GetWidth() int32`

GetWidth returns the Width field if non-nil, zero value otherwise.

### GetWidthOk

`func (o *TextToImageParams) GetWidthOk() (*int32, bool)`

GetWidthOk returns a tuple with the Width field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWidth

`func (o *TextToImageParams) SetWidth(v int32)`

SetWidth sets Width field to given value.

### HasWidth

`func (o *TextToImageParams) HasWidth() bool`

HasWidth returns a boolean if a field has been set.

### GetGuidanceScale

`func (o *TextToImageParams) GetGuidanceScale() float32`

GetGuidanceScale returns the GuidanceScale field if non-nil, zero value otherwise.

### GetGuidanceScaleOk

`func (o *TextToImageParams) GetGuidanceScaleOk() (*float32, bool)`

GetGuidanceScaleOk returns a tuple with the GuidanceScale field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuidanceScale

`func (o *TextToImageParams) SetGuidanceScale(v float32)`

SetGuidanceScale sets GuidanceScale field to given value.

### HasGuidanceScale

`func (o *TextToImageParams) HasGuidanceScale() bool`

HasGuidanceScale returns a boolean if a field has been set.

### GetNegativePrompt

`func (o *TextToImageParams) GetNegativePrompt() string`

GetNegativePrompt returns the NegativePrompt field if non-nil, zero value otherwise.

### GetNegativePromptOk

`func (o *TextToImageParams) GetNegativePromptOk() (*string, bool)`

GetNegativePromptOk returns a tuple with the NegativePrompt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNegativePrompt

`func (o *TextToImageParams) SetNegativePrompt(v string)`

SetNegativePrompt sets NegativePrompt field to given value.

### HasNegativePrompt

`func (o *TextToImageParams) HasNegativePrompt() bool`

HasNegativePrompt returns a boolean if a field has been set.

### GetSafetyCheck

`func (o *TextToImageParams) GetSafetyCheck() bool`

GetSafetyCheck returns the SafetyCheck field if non-nil, zero value otherwise.

### GetSafetyCheckOk

`func (o *TextToImageParams) GetSafetyCheckOk() (*bool, bool)`

GetSafetyCheckOk returns a tuple with the SafetyCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSafetyCheck

`func (o *TextToImageParams) SetSafetyCheck(v bool)`

SetSafetyCheck sets SafetyCheck field to given value.

### HasSafetyCheck

`func (o *TextToImageParams) HasSafetyCheck() bool`

HasSafetyCheck returns a boolean if a field has been set.

### GetSeed

`func (o *TextToImageParams) GetSeed() int32`

GetSeed returns the Seed field if non-nil, zero value otherwise.

### GetSeedOk

`func (o *TextToImageParams) GetSeedOk() (*int32, bool)`

GetSeedOk returns a tuple with the Seed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeed

`func (o *TextToImageParams) SetSeed(v int32)`

SetSeed sets Seed field to given value.

### HasSeed

`func (o *TextToImageParams) HasSeed() bool`

HasSeed returns a boolean if a field has been set.

### GetNumInferenceSteps

`func (o *TextToImageParams) GetNumInferenceSteps() int32`

GetNumInferenceSteps returns the NumInferenceSteps field if non-nil, zero value otherwise.

### GetNumInferenceStepsOk

`func (o *TextToImageParams) GetNumInferenceStepsOk() (*int32, bool)`

GetNumInferenceStepsOk returns a tuple with the NumInferenceSteps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumInferenceSteps

`func (o *TextToImageParams) SetNumInferenceSteps(v int32)`

SetNumInferenceSteps sets NumInferenceSteps field to given value.

### HasNumInferenceSteps

`func (o *TextToImageParams) HasNumInferenceSteps() bool`

HasNumInferenceSteps returns a boolean if a field has been set.

### GetNumImagesPerPrompt

`func (o *TextToImageParams) GetNumImagesPerPrompt() int32`

GetNumImagesPerPrompt returns the NumImagesPerPrompt field if non-nil, zero value otherwise.

### GetNumImagesPerPromptOk

`func (o *TextToImageParams) GetNumImagesPerPromptOk() (*int32, bool)`

GetNumImagesPerPromptOk returns a tuple with the NumImagesPerPrompt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumImagesPerPrompt

`func (o *TextToImageParams) SetNumImagesPerPrompt(v int32)`

SetNumImagesPerPrompt sets NumImagesPerPrompt field to given value.

### HasNumImagesPerPrompt

`func (o *TextToImageParams) HasNumImagesPerPrompt() bool`

HasNumImagesPerPrompt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


