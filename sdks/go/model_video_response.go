/*
Livepeer AI Runner

An application to run AI pipelines

API version: 0.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package livepeer_ai

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the VideoResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &VideoResponse{}

// VideoResponse struct for VideoResponse
type VideoResponse struct {
	Images []Media `json:"images"`
}

type _VideoResponse VideoResponse

// NewVideoResponse instantiates a new VideoResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewVideoResponse(images []Media) *VideoResponse {
	this := VideoResponse{}
	this.Images = images
	return &this
}

// NewVideoResponseWithDefaults instantiates a new VideoResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewVideoResponseWithDefaults() *VideoResponse {
	this := VideoResponse{}
	return &this
}

// GetImages returns the Images field value
func (o *VideoResponse) GetImages() []Media {
	if o == nil {
		var ret []Media
		return ret
	}

	return o.Images
}

// GetImagesOk returns a tuple with the Images field value
// and a boolean to check if the value has been set.
func (o *VideoResponse) GetImagesOk() ([]Media, bool) {
	if o == nil {
		return nil, false
	}
	return o.Images, true
}

// SetImages sets field value
func (o *VideoResponse) SetImages(v []Media) {
	o.Images = v
}

func (o VideoResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o VideoResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["images"] = o.Images
	return toSerialize, nil
}

func (o *VideoResponse) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"images",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varVideoResponse := _VideoResponse{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varVideoResponse)

	if err != nil {
		return err
	}

	*o = VideoResponse(varVideoResponse)

	return err
}

type NullableVideoResponse struct {
	value *VideoResponse
	isSet bool
}

func (v NullableVideoResponse) Get() *VideoResponse {
	return v.value
}

func (v *NullableVideoResponse) Set(val *VideoResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableVideoResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableVideoResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableVideoResponse(val *VideoResponse) *NullableVideoResponse {
	return &NullableVideoResponse{value: val, isSet: true}
}

func (v NullableVideoResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableVideoResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


