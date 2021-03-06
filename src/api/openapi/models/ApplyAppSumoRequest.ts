/* tslint:disable */
/* eslint-disable */
/**
 * General
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ApplyAppSumoRequest
 */
export interface ApplyAppSumoRequest {
    /**
     * 
     * @type {string}
     * @memberof ApplyAppSumoRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplyAppSumoRequest
     */
    code?: string | null;
}

export function ApplyAppSumoRequestFromJSON(json: any): ApplyAppSumoRequest {
    return ApplyAppSumoRequestFromJSONTyped(json, false);
}

export function ApplyAppSumoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyAppSumoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'code': !exists(json, 'code') ? undefined : json['code'],
    };
}

export function ApplyAppSumoRequestToJSON(value?: ApplyAppSumoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'code': value.code,
    };
}


