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

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiImageToImageRequest {
    /**
     * 
     * @type string
     * @memberof DefaultApiimageToImage
     */
    prompt: string
    /**
     * 
     * @type HttpFile
     * @memberof DefaultApiimageToImage
     */
    image: HttpFile
    /**
     * 
     * @type string
     * @memberof DefaultApiimageToImage
     */
    modelId: string
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToImage
     */
    strength?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToImage
     */
    guidanceScale?: number
    /**
     * 
     * @type string
     * @memberof DefaultApiimageToImage
     */
    negativePrompt?: string
    /**
     * 
     * @type boolean
     * @memberof DefaultApiimageToImage
     */
    safetyCheck?: boolean
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToImage
     */
    seed?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToImage
     */
    numImagesPerPrompt?: number
}

export interface DefaultApiImageToVideoRequest {
    /**
     * 
     * @type HttpFile
     * @memberof DefaultApiimageToVideo
     */
    image: HttpFile
    /**
     * 
     * @type string
     * @memberof DefaultApiimageToVideo
     */
    modelId: string
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    height?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    width?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    fps?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    motionBucketId?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    noiseAugStrength?: number
    /**
     * 
     * @type number
     * @memberof DefaultApiimageToVideo
     */
    seed?: number
}

export interface DefaultApiTextToImageRequest {
    /**
     * 
     * @type TextToImageParams
     * @memberof DefaultApitextToImage
     */
    textToImageParams: TextToImageParams
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Image To Image
     * @param param the request object
     */
    public imageToImageWithHttpInfo(param: DefaultApiImageToImageRequest, options?: Configuration): Promise<HttpInfo<ImageResponse>> {
        return this.api.imageToImageWithHttpInfo(param.prompt, param.image, param.modelId, param.strength, param.guidanceScale, param.negativePrompt, param.safetyCheck, param.seed, param.numImagesPerPrompt,  options).toPromise();
    }

    /**
     * Image To Image
     * @param param the request object
     */
    public imageToImage(param: DefaultApiImageToImageRequest, options?: Configuration): Promise<ImageResponse> {
        return this.api.imageToImage(param.prompt, param.image, param.modelId, param.strength, param.guidanceScale, param.negativePrompt, param.safetyCheck, param.seed, param.numImagesPerPrompt,  options).toPromise();
    }

    /**
     * Image To Video
     * @param param the request object
     */
    public imageToVideoWithHttpInfo(param: DefaultApiImageToVideoRequest, options?: Configuration): Promise<HttpInfo<VideoResponse>> {
        return this.api.imageToVideoWithHttpInfo(param.image, param.modelId, param.height, param.width, param.fps, param.motionBucketId, param.noiseAugStrength, param.seed,  options).toPromise();
    }

    /**
     * Image To Video
     * @param param the request object
     */
    public imageToVideo(param: DefaultApiImageToVideoRequest, options?: Configuration): Promise<VideoResponse> {
        return this.api.imageToVideo(param.image, param.modelId, param.height, param.width, param.fps, param.motionBucketId, param.noiseAugStrength, param.seed,  options).toPromise();
    }

    /**
     * Text To Image
     * @param param the request object
     */
    public textToImageWithHttpInfo(param: DefaultApiTextToImageRequest, options?: Configuration): Promise<HttpInfo<ImageResponse>> {
        return this.api.textToImageWithHttpInfo(param.textToImageParams,  options).toPromise();
    }

    /**
     * Text To Image
     * @param param the request object
     */
    public textToImage(param: DefaultApiTextToImageRequest, options?: Configuration): Promise<ImageResponse> {
        return this.api.textToImage(param.textToImageParams,  options).toPromise();
    }

}
