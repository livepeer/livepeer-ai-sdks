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

// checks if the Media type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Media{}

// Media struct for Media
type Media struct {
	Url string `json:"url"`
	Seed int32 `json:"seed"`
	Nsfw bool `json:"nsfw"`
}

type _Media Media

// NewMedia instantiates a new Media object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMedia(url string, seed int32, nsfw bool) *Media {
	this := Media{}
	this.Url = url
	this.Seed = seed
	this.Nsfw = nsfw
	return &this
}

// NewMediaWithDefaults instantiates a new Media object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMediaWithDefaults() *Media {
	this := Media{}
	return &this
}

// GetUrl returns the Url field value
func (o *Media) GetUrl() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Url
}

// GetUrlOk returns a tuple with the Url field value
// and a boolean to check if the value has been set.
func (o *Media) GetUrlOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Url, true
}

// SetUrl sets field value
func (o *Media) SetUrl(v string) {
	o.Url = v
}

// GetSeed returns the Seed field value
func (o *Media) GetSeed() int32 {
	if o == nil {
		var ret int32
		return ret
	}

	return o.Seed
}

// GetSeedOk returns a tuple with the Seed field value
// and a boolean to check if the value has been set.
func (o *Media) GetSeedOk() (*int32, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Seed, true
}

// SetSeed sets field value
func (o *Media) SetSeed(v int32) {
	o.Seed = v
}

// GetNsfw returns the Nsfw field value
func (o *Media) GetNsfw() bool {
	if o == nil {
		var ret bool
		return ret
	}

	return o.Nsfw
}

// GetNsfwOk returns a tuple with the Nsfw field value
// and a boolean to check if the value has been set.
func (o *Media) GetNsfwOk() (*bool, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Nsfw, true
}

// SetNsfw sets field value
func (o *Media) SetNsfw(v bool) {
	o.Nsfw = v
}

func (o Media) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Media) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["url"] = o.Url
	toSerialize["seed"] = o.Seed
	toSerialize["nsfw"] = o.Nsfw
	return toSerialize, nil
}

func (o *Media) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"url",
		"seed",
		"nsfw",
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

	varMedia := _Media{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varMedia)

	if err != nil {
		return err
	}

	*o = Media(varMedia)

	return err
}

type NullableMedia struct {
	value *Media
	isSet bool
}

func (v NullableMedia) Get() *Media {
	return v.value
}

func (v *NullableMedia) Set(val *Media) {
	v.value = val
	v.isSet = true
}

func (v NullableMedia) IsSet() bool {
	return v.isSet
}

func (v *NullableMedia) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMedia(val *Media) *NullableMedia {
	return &NullableMedia{value: val, isSet: true}
}

func (v NullableMedia) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMedia) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


