/**
 * Livepeer AI Runner
 * An application to run AI pipelines
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LivepeerAiRunner);
  }
}(this, function(expect, LivepeerAiRunner) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LivepeerAiRunner.TextToImageParams();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TextToImageParams', function() {
    it('should create an instance of TextToImageParams', function() {
      // uncomment below and update the code to test TextToImageParams
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be.a(LivepeerAiRunner.TextToImageParams);
    });

    it('should have the property modelId (base name: "model_id")', function() {
      // uncomment below and update the code to test the property modelId
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property prompt (base name: "prompt")', function() {
      // uncomment below and update the code to test the property prompt
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property height (base name: "height")', function() {
      // uncomment below and update the code to test the property height
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property width (base name: "width")', function() {
      // uncomment below and update the code to test the property width
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property guidanceScale (base name: "guidance_scale")', function() {
      // uncomment below and update the code to test the property guidanceScale
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property negativePrompt (base name: "negative_prompt")', function() {
      // uncomment below and update the code to test the property negativePrompt
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property safetyCheck (base name: "safety_check")', function() {
      // uncomment below and update the code to test the property safetyCheck
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property seed (base name: "seed")', function() {
      // uncomment below and update the code to test the property seed
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property numInferenceSteps (base name: "num_inference_steps")', function() {
      // uncomment below and update the code to test the property numInferenceSteps
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

    it('should have the property numImagesPerPrompt (base name: "num_images_per_prompt")', function() {
      // uncomment below and update the code to test the property numImagesPerPrompt
      //var instance = new LivepeerAiRunner.TextToImageParams();
      //expect(instance).to.be();
    });

  });

}));
