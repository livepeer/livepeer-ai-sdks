import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * Image To Image
     * @param prompt 
     * @param image 
     * @param modelId 
     * @param strength 
     * @param guidanceScale 
     * @param imageGuidanceScale 
     * @param negativePrompt 
     * @param safetyCheck 
     * @param seed 
     * @param numImagesPerPrompt 
     */
    public imageToImageWithHttpInfo(prompt: string, image: HttpFile, modelId: string, strength?: number, guidanceScale?: number, imageGuidanceScale?: number, negativePrompt?: string, safetyCheck?: boolean, seed?: number, numImagesPerPrompt?: number, _options?: Configuration): Observable<HttpInfo<ImageResponse>> {
        const requestContextPromise = this.requestFactory.imageToImage(prompt, image, modelId, strength, guidanceScale, imageGuidanceScale, negativePrompt, safetyCheck, seed, numImagesPerPrompt, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageToImageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Image To Image
     * @param prompt 
     * @param image 
     * @param modelId 
     * @param strength 
     * @param guidanceScale 
     * @param imageGuidanceScale 
     * @param negativePrompt 
     * @param safetyCheck 
     * @param seed 
     * @param numImagesPerPrompt 
     */
    public imageToImage(prompt: string, image: HttpFile, modelId: string, strength?: number, guidanceScale?: number, imageGuidanceScale?: number, negativePrompt?: string, safetyCheck?: boolean, seed?: number, numImagesPerPrompt?: number, _options?: Configuration): Observable<ImageResponse> {
        return this.imageToImageWithHttpInfo(prompt, image, modelId, strength, guidanceScale, imageGuidanceScale, negativePrompt, safetyCheck, seed, numImagesPerPrompt, _options).pipe(map((apiResponse: HttpInfo<ImageResponse>) => apiResponse.data));
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
     * @param safetyCheck 
     */
    public imageToVideoWithHttpInfo(image: HttpFile, modelId: string, height?: number, width?: number, fps?: number, motionBucketId?: number, noiseAugStrength?: number, seed?: number, safetyCheck?: boolean, _options?: Configuration): Observable<HttpInfo<VideoResponse>> {
        const requestContextPromise = this.requestFactory.imageToVideo(image, modelId, height, width, fps, motionBucketId, noiseAugStrength, seed, safetyCheck, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.imageToVideoWithHttpInfo(rsp)));
            }));
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
     * @param safetyCheck 
     */
    public imageToVideo(image: HttpFile, modelId: string, height?: number, width?: number, fps?: number, motionBucketId?: number, noiseAugStrength?: number, seed?: number, safetyCheck?: boolean, _options?: Configuration): Observable<VideoResponse> {
        return this.imageToVideoWithHttpInfo(image, modelId, height, width, fps, motionBucketId, noiseAugStrength, seed, safetyCheck, _options).pipe(map((apiResponse: HttpInfo<VideoResponse>) => apiResponse.data));
    }

    /**
     * Text To Image
     * @param textToImageParams 
     */
    public textToImageWithHttpInfo(textToImageParams: TextToImageParams, _options?: Configuration): Observable<HttpInfo<ImageResponse>> {
        const requestContextPromise = this.requestFactory.textToImage(textToImageParams, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.textToImageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Text To Image
     * @param textToImageParams 
     */
    public textToImage(textToImageParams: TextToImageParams, _options?: Configuration): Observable<ImageResponse> {
        return this.textToImageWithHttpInfo(textToImageParams, _options).pipe(map((apiResponse: HttpInfo<ImageResponse>) => apiResponse.data));
    }

    /**
     * Upscale
     * @param prompt 
     * @param image 
     * @param modelId 
     * @param safetyCheck 
     * @param seed 
     */
    public upscaleWithHttpInfo(prompt: string, image: HttpFile, modelId: string, safetyCheck?: boolean, seed?: number, _options?: Configuration): Observable<HttpInfo<ImageResponse>> {
        const requestContextPromise = this.requestFactory.upscale(prompt, image, modelId, safetyCheck, seed, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upscaleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upscale
     * @param prompt 
     * @param image 
     * @param modelId 
     * @param safetyCheck 
     * @param seed 
     */
    public upscale(prompt: string, image: HttpFile, modelId: string, safetyCheck?: boolean, seed?: number, _options?: Configuration): Observable<ImageResponse> {
        return this.upscaleWithHttpInfo(prompt, image, modelId, safetyCheck, seed, _options).pipe(map((apiResponse: HttpInfo<ImageResponse>) => apiResponse.data));
    }

}
