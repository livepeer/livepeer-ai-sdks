# HTTPError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** | [**APIError**](APIError.md) |  | 

## Methods

### NewHTTPError

`func NewHTTPError(detail APIError, ) *HTTPError`

NewHTTPError instantiates a new HTTPError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHTTPErrorWithDefaults

`func NewHTTPErrorWithDefaults() *HTTPError`

NewHTTPErrorWithDefaults instantiates a new HTTPError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetail

`func (o *HTTPError) GetDetail() APIError`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *HTTPError) GetDetailOk() (*APIError, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *HTTPError) SetDetail(v APIError)`

SetDetail sets Detail field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


