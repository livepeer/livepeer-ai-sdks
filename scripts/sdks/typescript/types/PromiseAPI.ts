import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { APIError } from '../models/APIError';
import { HTTPError } from '../models/HTTPError';
import { HTTPValidationError } from '../models/HTTPValidationError';
import { HealthCheck } from '../models/HealthCheck';
import { ImageResponse } from '../models/ImageResponse';
import { Media } from '../models/Media';
import { TextToImageParams } from '../models/TextToImageParams';
import { ValidationError } from '../models/ValidationError';
import { ValidationErrorLocInner } from '../models/ValidationErrorLocInner';
import { VideoResponse } from '../models/VideoResponse';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

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
    public imageToImageWithHttpInfo(prompt: string, image: HttpFile, modelId: string, strength?: number, guidanceScale?: number, negativePrompt?: string, safetyCheck?: boolean, seed?: number, numImagesPerPrompt?: number, _options?: Configuration): Promise<HttpInfo<ImageResponse>> {
        const result = this.api.imageToImageWithHttpInfo(prompt, image, modelId, strength, guidanceScale, negativePrompt, safetyCheck, seed, numImagesPerPrompt, _options);
        return result.toPromise();
    }

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
    public imageToImage(prompt: string, image: HttpFile, modelId: string, strength?: number, guidanceScale?: number, negativePrompt?: string, safetyCheck?: boolean, seed?: number, numImagesPerPrompt?: number, _options?: Configuration): Promise<ImageResponse> {
        const result = this.api.imageToImage(prompt, image, modelId, strength, guidanceScale, negativePrompt, safetyCheck, seed, numImagesPerPrompt, _options);
        return result.toPromise();
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
    public imageToVideoWithHttpInfo(image: HttpFile, modelId: string, height?: number, width?: number, fps?: number, motionBucketId?: number, noiseAugStrength?: number, seed?: number, _options?: Configuration): Promise<HttpInfo<VideoResponse>> {
        const result = this.api.imageToVideoWithHttpInfo(image, modelId, height, width, fps, motionBucketId, noiseAugStrength, seed, _options);
        return result.toPromise();
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
    public imageToVideo(image: HttpFile, modelId: string, height?: number, width?: number, fps?: number, motionBucketId?: number, noiseAugStrength?: number, seed?: number, _options?: Configuration): Promise<VideoResponse> {
        const result = this.api.imageToVideo(image, modelId, height, width, fps, motionBucketId, noiseAugStrength, seed, _options);
        return result.toPromise();
    }

    /**
     * Text To Image
     * @param textToImageParams 
     */
    public textToImageWithHttpInfo(textToImageParams: TextToImageParams, _options?: Configuration): Promise<HttpInfo<ImageResponse>> {
        const result = this.api.textToImageWithHttpInfo(textToImageParams, _options);
        return result.toPromise();
    }

    /**
     * Text To Image
     * @param textToImageParams 
     */
    public textToImage(textToImageParams: TextToImageParams, _options?: Configuration): Promise<ImageResponse> {
        const result = this.api.textToImage(textToImageParams, _options);
        return result.toPromise();
    }


}



