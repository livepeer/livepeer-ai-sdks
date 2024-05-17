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

// checks if the HTTPError type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HTTPError{}

// HTTPError struct for HTTPError
type HTTPError struct {
	Detail APIError `json:"detail"`
}

type _HTTPError HTTPError

// NewHTTPError instantiates a new HTTPError object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHTTPError(detail APIError) *HTTPError {
	this := HTTPError{}
	this.Detail = detail
	return &this
}

// NewHTTPErrorWithDefaults instantiates a new HTTPError object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHTTPErrorWithDefaults() *HTTPError {
	this := HTTPError{}
	return &this
}

// GetDetail returns the Detail field value
func (o *HTTPError) GetDetail() APIError {
	if o == nil {
		var ret APIError
		return ret
	}

	return o.Detail
}

// GetDetailOk returns a tuple with the Detail field value
// and a boolean to check if the value has been set.
func (o *HTTPError) GetDetailOk() (*APIError, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Detail, true
}

// SetDetail sets field value
func (o *HTTPError) SetDetail(v APIError) {
	o.Detail = v
}

func (o HTTPError) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HTTPError) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["detail"] = o.Detail
	return toSerialize, nil
}

func (o *HTTPError) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"detail",
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

	varHTTPError := _HTTPError{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varHTTPError)

	if err != nil {
		return err
	}

	*o = HTTPError(varHTTPError)

	return err
}

type NullableHTTPError struct {
	value *HTTPError
	isSet bool
}

func (v NullableHTTPError) Get() *HTTPError {
	return v.value
}

func (v *NullableHTTPError) Set(val *HTTPError) {
	v.value = val
	v.isSet = true
}

func (v NullableHTTPError) IsSet() bool {
	return v.isSet
}

func (v *NullableHTTPError) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHTTPError(val *HTTPError) *NullableHTTPError {
	return &NullableHTTPError{value: val, isSet: true}
}

func (v NullableHTTPError) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHTTPError) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

