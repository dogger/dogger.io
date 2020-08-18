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
 * @interface ApplyCouponResponse
 */
export interface ApplyCouponResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ApplyCouponResponse
     */
    readonly wasApplied?: boolean;
}

export function ApplyCouponResponseFromJSON(json: any): ApplyCouponResponse {
    return ApplyCouponResponseFromJSONTyped(json, false);
}

export function ApplyCouponResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyCouponResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'wasApplied': !exists(json, 'wasApplied') ? undefined : json['wasApplied'],
    };
}

export function ApplyCouponResponseToJSON(value?: ApplyCouponResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
    };
}

