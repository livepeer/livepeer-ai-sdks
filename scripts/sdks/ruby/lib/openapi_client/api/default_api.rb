=begin
#Livepeer AI Runner

#An application to run AI pipelines

The version of the OpenAPI document: 0.1.0

Generated by: https://openapi-generator.tech
Generator version: 7.5.0

=end

require 'cgi'

module OpenapiClient
  class DefaultApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end
    # Image To Image
    # @param prompt [String] 
    # @param image [File] 
    # @param model_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Float] :strength  (default to 0.8)
    # @option opts [Float] :guidance_scale  (default to 7.5)
    # @option opts [String] :negative_prompt  (default to '')
    # @option opts [Boolean] :safety_check  (default to true)
    # @option opts [Integer] :seed 
    # @option opts [Integer] :num_images_per_prompt  (default to 1)
    # @return [ImageResponse]
    def image_to_image(prompt, image, model_id, opts = {})
      data, _status_code, _headers = image_to_image_with_http_info(prompt, image, model_id, opts)
      data
    end

    # Image To Image
    # @param prompt [String] 
    # @param image [File] 
    # @param model_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Float] :strength  (default to 0.8)
    # @option opts [Float] :guidance_scale  (default to 7.5)
    # @option opts [String] :negative_prompt  (default to '')
    # @option opts [Boolean] :safety_check  (default to true)
    # @option opts [Integer] :seed 
    # @option opts [Integer] :num_images_per_prompt  (default to 1)
    # @return [Array<(ImageResponse, Integer, Hash)>] ImageResponse data, response status code and response headers
    def image_to_image_with_http_info(prompt, image, model_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DefaultApi.image_to_image ...'
      end
      # verify the required parameter 'prompt' is set
      if @api_client.config.client_side_validation && prompt.nil?
        fail ArgumentError, "Missing the required parameter 'prompt' when calling DefaultApi.image_to_image"
      end
      # verify the required parameter 'image' is set
      if @api_client.config.client_side_validation && image.nil?
        fail ArgumentError, "Missing the required parameter 'image' when calling DefaultApi.image_to_image"
      end
      # verify the required parameter 'model_id' is set
      if @api_client.config.client_side_validation && model_id.nil?
        fail ArgumentError, "Missing the required parameter 'model_id' when calling DefaultApi.image_to_image"
      end
      # resource path
      local_var_path = '/image-to-image'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['multipart/form-data'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}
      form_params['prompt'] = prompt
      form_params['image'] = image
      form_params['model_id'] = model_id
      form_params['strength'] = opts[:'strength'] if !opts[:'strength'].nil?
      form_params['guidance_scale'] = opts[:'guidance_scale'] if !opts[:'guidance_scale'].nil?
      form_params['negative_prompt'] = opts[:'negative_prompt'] if !opts[:'negative_prompt'].nil?
      form_params['safety_check'] = opts[:'safety_check'] if !opts[:'safety_check'].nil?
      form_params['seed'] = opts[:'seed'] if !opts[:'seed'].nil?
      form_params['num_images_per_prompt'] = opts[:'num_images_per_prompt'] if !opts[:'num_images_per_prompt'].nil?

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'ImageResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"DefaultApi.image_to_image",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DefaultApi#image_to_image\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Image To Video
    # @param image [File] 
    # @param model_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :height  (default to 576)
    # @option opts [Integer] :width  (default to 1024)
    # @option opts [Integer] :fps  (default to 6)
    # @option opts [Integer] :motion_bucket_id  (default to 127)
    # @option opts [Float] :noise_aug_strength  (default to 0.02)
    # @option opts [Integer] :seed 
    # @return [VideoResponse]
    def image_to_video(image, model_id, opts = {})
      data, _status_code, _headers = image_to_video_with_http_info(image, model_id, opts)
      data
    end

    # Image To Video
    # @param image [File] 
    # @param model_id [String] 
    # @param [Hash] opts the optional parameters
    # @option opts [Integer] :height  (default to 576)
    # @option opts [Integer] :width  (default to 1024)
    # @option opts [Integer] :fps  (default to 6)
    # @option opts [Integer] :motion_bucket_id  (default to 127)
    # @option opts [Float] :noise_aug_strength  (default to 0.02)
    # @option opts [Integer] :seed 
    # @return [Array<(VideoResponse, Integer, Hash)>] VideoResponse data, response status code and response headers
    def image_to_video_with_http_info(image, model_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DefaultApi.image_to_video ...'
      end
      # verify the required parameter 'image' is set
      if @api_client.config.client_side_validation && image.nil?
        fail ArgumentError, "Missing the required parameter 'image' when calling DefaultApi.image_to_video"
      end
      # verify the required parameter 'model_id' is set
      if @api_client.config.client_side_validation && model_id.nil?
        fail ArgumentError, "Missing the required parameter 'model_id' when calling DefaultApi.image_to_video"
      end
      # resource path
      local_var_path = '/image-to-video'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['multipart/form-data'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}
      form_params['image'] = image
      form_params['model_id'] = model_id
      form_params['height'] = opts[:'height'] if !opts[:'height'].nil?
      form_params['width'] = opts[:'width'] if !opts[:'width'].nil?
      form_params['fps'] = opts[:'fps'] if !opts[:'fps'].nil?
      form_params['motion_bucket_id'] = opts[:'motion_bucket_id'] if !opts[:'motion_bucket_id'].nil?
      form_params['noise_aug_strength'] = opts[:'noise_aug_strength'] if !opts[:'noise_aug_strength'].nil?
      form_params['seed'] = opts[:'seed'] if !opts[:'seed'].nil?

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'VideoResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"DefaultApi.image_to_video",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DefaultApi#image_to_video\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end

    # Text To Image
    # @param text_to_image_params [TextToImageParams] 
    # @param [Hash] opts the optional parameters
    # @return [ImageResponse]
    def text_to_image(text_to_image_params, opts = {})
      data, _status_code, _headers = text_to_image_with_http_info(text_to_image_params, opts)
      data
    end

    # Text To Image
    # @param text_to_image_params [TextToImageParams] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(ImageResponse, Integer, Hash)>] ImageResponse data, response status code and response headers
    def text_to_image_with_http_info(text_to_image_params, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DefaultApi.text_to_image ...'
      end
      # verify the required parameter 'text_to_image_params' is set
      if @api_client.config.client_side_validation && text_to_image_params.nil?
        fail ArgumentError, "Missing the required parameter 'text_to_image_params' when calling DefaultApi.text_to_image"
      end
      # resource path
      local_var_path = '/text-to-image'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
          header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(text_to_image_params)

      # return_type
      return_type = opts[:debug_return_type] || 'ImageResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['HTTPBearer']

      new_options = opts.merge(
        :operation => :"DefaultApi.text_to_image",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DefaultApi#text_to_image\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers
    end
  end
end
