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

import ApiClient from '../ApiClient';

/**
 * The Media model module.
 * @module model/Media
 * @version 0.1.0
 */
class Media {
    /**
     * Constructs a new <code>Media</code>.
     * @alias module:model/Media
     * @param url {String} 
     * @param seed {Number} 
     * @param nsfw {Boolean} 
     */
    constructor(url, seed, nsfw) { 
        
        Media.initialize(this, url, seed, nsfw);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, seed, nsfw) { 
        obj['url'] = url;
        obj['seed'] = seed;
        obj['nsfw'] = nsfw;
    }

    /**
     * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Media} obj Optional instance to populate.
     * @return {module:model/Media} The populated <code>Media</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Media();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('seed')) {
                obj['seed'] = ApiClient.convertToType(data['seed'], 'Number');
            }
            if (data.hasOwnProperty('nsfw')) {
                obj['nsfw'] = ApiClient.convertToType(data['nsfw'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Media</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Media</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Media.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

Media.RequiredProperties = ["url", "seed", "nsfw"];

/**
 * @member {String} url
 */
Media.prototype['url'] = undefined;

/**
 * @member {Number} seed
 */
Media.prototype['seed'] = undefined;

/**
 * @member {Boolean} nsfw
 */
Media.prototype['nsfw'] = undefined;






export default Media;

