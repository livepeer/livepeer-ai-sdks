// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPError } from '../models/HTTPError';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { ImageResponse } from '../models/ImageResponse';
import { TextToImageParams } from '../models/TextToImageParams';
import { VideoResponse } from '../models/VideoResponse';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Image To Image
     * @param prompt 
     * @param image 
     * @param modelId 
     * @param strength 
     * @param guidanceScale 
     * @param negativePrompt 
     * @param safetyCheck 
     * @param seed 
     * @param numImagesPerPrompt 
     */
    public async imageToImage(prompt: string, image: HttpFile, modelId: string, strength?: number, guidanceScale?: number, negativePrompt?: string, safetyCheck?: boolean, seed?: number, numImagesPerPrompt?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'prompt' is not null or undefined
        if (prompt === null || prompt === undefined) {
            throw new RequiredError("DefaultApi", "imageToImage", "prompt");
        }


        // verify required parameter 'image' is not null or undefined
        if (image === null || image === undefined) {
            throw new RequiredError("DefaultApi", "imageToImage", "image");
        }


        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new RequiredError("DefaultApi", "imageToImage", "modelId");
        }








        // Path Params
        const localVarPath = '/image-to-image';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (prompt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('prompt', prompt as any);
        }
        if (image !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('image', image, image.name);
             }
        }
        if (modelId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('model_id', modelId as any);
        }
        if (strength !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('strength', strength as any);
        }
        if (guidanceScale !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('guidance_scale', guidanceScale as any);
        }
        if (negativePrompt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('negative_prompt', negativePrompt as any);
        }
        if (safetyCheck !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('safety_check', safetyCheck as any);
        }
        if (seed !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('seed', seed as any);
        }
        if (numImagesPerPrompt !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('num_images_per_prompt', numImagesPerPrompt as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Image To Video
     * @param image 
     * @param modelId 
     * @param height 
     * @param width 
     * @param fps 
     * @param motionBucketId 
     * @param noiseAugStrength 
     * @param seed 
     */
    public async imageToVideo(image: HttpFile, modelId: string, height?: number, width?: number, fps?: number, motionBucketId?: number, noiseAugStrength?: number, seed?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'image' is not null or undefined
        if (image === null || image === undefined) {
            throw new RequiredError("DefaultApi", "imageToVideo", "image");
        }


        // verify required parameter 'modelId' is not null or undefined
        if (modelId === null || modelId === undefined) {
            throw new RequiredError("DefaultApi", "imageToVideo", "modelId");
        }








        // Path Params
        const localVarPath = '/image-to-video';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Form Params
        const useForm = canConsumeForm([
            'multipart/form-data',
        ]);

        let localVarFormParams
        if (useForm) {
            localVarFormParams = new FormData();
        } else {
            localVarFormParams = new URLSearchParams();
        }

        if (image !== undefined) {
             // TODO: replace .append with .set
             if (localVarFormParams instanceof FormData) {
                 localVarFormParams.append('image', image, image.name);
             }
        }
        if (modelId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('model_id', modelId as any);
        }
        if (height !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('height', height as any);
        }
        if (width !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('width', width as any);
        }
        if (fps !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('fps', fps as any);
        }
        if (motionBucketId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('motion_bucket_id', motionBucketId as any);
        }
        if (noiseAugStrength !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('noise_aug_strength', noiseAugStrength as any);
        }
        if (seed !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('seed', seed as any);
        }

        requestContext.setBody(localVarFormParams);

        if(!useForm) {
            const contentType = ObjectSerializer.getPreferredMediaType([
                "multipart/form-data"
            ]);
            requestContext.setHeaderParam("Content-Type", contentType);
        }

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Text To Image
     * @param textToImageParams 
     */
    public async textToImage(textToImageParams: TextToImageParams, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'textToImageParams' is not null or undefined
        if (textToImageParams === null || textToImageParams === undefined) {
            throw new RequiredError("DefaultApi", "textToImage", "textToImageParams");
        }


        // Path Params
        const localVarPath = '/text-to-image';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(textToImageParams, "TextToImageParams", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["HTTPBearer"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageToImage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageToImageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResponse", ""
            ) as ImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResponse", ""
            ) as ImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to imageToVideo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async imageToVideoWithHttpInfo(response: ResponseContext): Promise<HttpInfo<VideoResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: VideoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoResponse", ""
            ) as VideoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: VideoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "VideoResponse", ""
            ) as VideoResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to textToImage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async textToImageWithHttpInfo(response: ResponseContext): Promise<HttpInfo<ImageResponse >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResponse", ""
            ) as ImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Bad Request", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: HTTPError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPError", ""
            ) as HTTPError;
            throw new ApiException<HTTPError>(response.httpStatusCode, "Internal Server Error", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(response.httpStatusCode, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImageResponse", ""
            ) as ImageResponse;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
