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
 * @interface UserPayload
 */
export interface UserPayload {
    /**
     * 
     * @type {string}
     * @memberof UserPayload
     */
    login?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UserPayload
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserPayload
     */
    type?: string | null;
}

export function UserPayloadFromJSON(json: any): UserPayload {
    return UserPayloadFromJSONTyped(json, false);
}

export function UserPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'login': !exists(json, 'login') ? undefined : json['login'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function UserPayloadToJSON(value?: UserPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'login': value.login,
        'id': value.id,
        'type': value.type,
    };
}


