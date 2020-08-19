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


import * as runtime from '../runtime';
import {
    ApplyAppSumoRequest,
    ApplyAppSumoRequestFromJSON,
    ApplyAppSumoRequestToJSON,
    ApplyCouponResponse,
    ApplyCouponResponseFromJSON,
    ApplyCouponResponseToJSON,
    ChangePlanRequest,
    ChangePlanRequestFromJSON,
    ChangePlanRequestToJSON,
    ClusterResponse,
    ClusterResponseFromJSON,
    ClusterResponseToJSON,
    ConnectionDetailsResponse,
    ConnectionDetailsResponseFromJSON,
    ConnectionDetailsResponseToJSON,
    CouponCodeResponse,
    CouponCodeResponseFromJSON,
    CouponCodeResponseToJSON,
    DeployToClusterRequest,
    DeployToClusterRequestFromJSON,
    DeployToClusterRequestToJSON,
    DeployToClusterResponse,
    DeployToClusterResponseFromJSON,
    DeployToClusterResponseToJSON,
    JobStatusResponse,
    JobStatusResponseFromJSON,
    JobStatusResponseToJSON,
    LoginResponse,
    LoginResponseFromJSON,
    LoginResponseToJSON,
    LogsResponse,
    LogsResponseFromJSON,
    LogsResponseToJSON,
    PaymentMethodResponse,
    PaymentMethodResponseFromJSON,
    PaymentMethodResponseToJSON,
    PlanProvisionResponse,
    PlanProvisionResponseFromJSON,
    PlanProvisionResponseToJSON,
    PlanResponse,
    PlanResponseFromJSON,
    PlanResponseToJSON,
    ProvisionRequest,
    ProvisionRequestFromJSON,
    ProvisionRequestToJSON,
    RepositoriesResponse,
    RepositoriesResponseFromJSON,
    RepositoriesResponseToJSON,
    SettingsResponse,
    SettingsResponseFromJSON,
    SettingsResponseToJSON,
    WebhookPayload,
    WebhookPayloadFromJSON,
    WebhookPayloadToJSON,
} from '../models';

export interface ApiClustersClusterIdConnectionDetailsGetRequest {
    clusterId: string | null;
}

export interface ApiClustersClusterIdDeployPostRequest {
    clusterId: string | null;
    deployToClusterRequest?: DeployToClusterRequest;
}

export interface ApiClustersClusterIdDestroyPostRequest {
    clusterId: string | null;
}

export interface ApiClustersClusterIdLogsGetRequest {
    clusterId: string | null;
}

export interface ApiClustersDemoDeployPostRequest {
    deployToClusterRequest?: DeployToClusterRequest;
}

export interface ApiClustersDeployPostRequest {
    deployToClusterRequest?: DeployToClusterRequest;
}

export interface ApiDealsAppsumoApplyPostRequest {
    applyAppSumoRequest?: ApplyAppSumoRequest;
}

export interface ApiJobsJobIdStatusGetRequest {
    jobId: string | null;
}

export interface ApiPaymentCouponCodePostRequest {
    code: string | null;
}

export interface ApiPaymentMethodsPaymentMethodIdPutRequest {
    paymentMethodId: string | null;
}

export interface ApiPlansProvisionPlanIdPostRequest {
    planId: string | null;
}

export interface ApiPullDogChangePlanPostRequest {
    changePlanRequest?: ChangePlanRequest;
}

export interface ApiPullDogProvisionPostRequest {
    provisionRequest?: ProvisionRequest;
}

export interface ApiWebhooksGithubPullDogPostRequest {
    webhookPayload?: WebhookPayload;
}

/**
 * no description
 */
export class GeneralApi extends runtime.BaseAPI {

    /**
     */
    async apiClustersClusterIdConnectionDetailsGetRaw(requestParameters: ApiClustersClusterIdConnectionDetailsGetRequest): Promise<runtime.ApiResponse<ConnectionDetailsResponse>> {
        if (requestParameters.clusterId === null || requestParameters.clusterId === undefined) {
            throw new runtime.RequiredError('clusterId','Required parameter requestParameters.clusterId was null or undefined when calling apiClustersClusterIdConnectionDetailsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/{clusterId}/connection-details`.replace(`{${"clusterId"}}`, encodeURIComponent(String(requestParameters.clusterId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiClustersClusterIdConnectionDetailsGet(clusterId: string | null): Promise<ConnectionDetailsResponse> {
        const response = await this.apiClustersClusterIdConnectionDetailsGetRaw({ clusterId: clusterId });
        return await response.value();
    }

    /**
     */
    async apiClustersClusterIdDeployPostRaw(requestParameters: ApiClustersClusterIdDeployPostRequest): Promise<runtime.ApiResponse<DeployToClusterResponse>> {
        if (requestParameters.clusterId === null || requestParameters.clusterId === undefined) {
            throw new runtime.RequiredError('clusterId','Required parameter requestParameters.clusterId was null or undefined when calling apiClustersClusterIdDeployPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/clusters/{clusterId}/deploy`.replace(`{${"clusterId"}}`, encodeURIComponent(String(requestParameters.clusterId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeployToClusterRequestToJSON(requestParameters.deployToClusterRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeployToClusterResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiClustersClusterIdDeployPost(clusterId: string | null, deployToClusterRequest?: DeployToClusterRequest): Promise<DeployToClusterResponse> {
        const response = await this.apiClustersClusterIdDeployPostRaw({ clusterId: clusterId, deployToClusterRequest: deployToClusterRequest });
        return await response.value();
    }

    /**
     */
    async apiClustersClusterIdDestroyPostRaw(requestParameters: ApiClustersClusterIdDestroyPostRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.clusterId === null || requestParameters.clusterId === undefined) {
            throw new runtime.RequiredError('clusterId','Required parameter requestParameters.clusterId was null or undefined when calling apiClustersClusterIdDestroyPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/{clusterId}/destroy`.replace(`{${"clusterId"}}`, encodeURIComponent(String(requestParameters.clusterId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiClustersClusterIdDestroyPost(clusterId: string | null): Promise<void> {
        await this.apiClustersClusterIdDestroyPostRaw({ clusterId: clusterId });
    }

    /**
     */
    async apiClustersClusterIdLogsGetRaw(requestParameters: ApiClustersClusterIdLogsGetRequest): Promise<runtime.ApiResponse<Array<LogsResponse>>> {
        if (requestParameters.clusterId === null || requestParameters.clusterId === undefined) {
            throw new runtime.RequiredError('clusterId','Required parameter requestParameters.clusterId was null or undefined when calling apiClustersClusterIdLogsGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/{clusterId}/logs`.replace(`{${"clusterId"}}`, encodeURIComponent(String(requestParameters.clusterId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LogsResponseFromJSON));
    }

    /**
     */
    async apiClustersClusterIdLogsGet(clusterId: string | null): Promise<Array<LogsResponse>> {
        const response = await this.apiClustersClusterIdLogsGetRaw({ clusterId: clusterId });
        return await response.value();
    }

    /**
     */
    async apiClustersDemoConnectionDetailsGetRaw(): Promise<runtime.ApiResponse<ConnectionDetailsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/demo/connection-details`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConnectionDetailsResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiClustersDemoConnectionDetailsGet(): Promise<ConnectionDetailsResponse> {
        const response = await this.apiClustersDemoConnectionDetailsGetRaw();
        return await response.value();
    }

    /**
     */
    async apiClustersDemoDeployPostRaw(requestParameters: ApiClustersDemoDeployPostRequest): Promise<runtime.ApiResponse<DeployToClusterResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/clusters/demo/deploy`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeployToClusterRequestToJSON(requestParameters.deployToClusterRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeployToClusterResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiClustersDemoDeployPost(deployToClusterRequest?: DeployToClusterRequest): Promise<DeployToClusterResponse> {
        const response = await this.apiClustersDemoDeployPostRaw({ deployToClusterRequest: deployToClusterRequest });
        return await response.value();
    }

    /**
     */
    async apiClustersDemoLogsGetRaw(): Promise<runtime.ApiResponse<Array<LogsResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/demo/logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LogsResponseFromJSON));
    }

    /**
     */
    async apiClustersDemoLogsGet(): Promise<Array<LogsResponse>> {
        const response = await this.apiClustersDemoLogsGetRaw();
        return await response.value();
    }

    /**
     */
    async apiClustersDeployPostRaw(requestParameters: ApiClustersDeployPostRequest): Promise<runtime.ApiResponse<DeployToClusterResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/clusters/deploy`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DeployToClusterRequestToJSON(requestParameters.deployToClusterRequest),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DeployToClusterResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiClustersDeployPost(deployToClusterRequest?: DeployToClusterRequest): Promise<DeployToClusterResponse> {
        const response = await this.apiClustersDeployPostRaw({ deployToClusterRequest: deployToClusterRequest });
        return await response.value();
    }

    /**
     */
    async apiClustersDestroyPostRaw(): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters/destroy`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiClustersDestroyPost(): Promise<void> {
        await this.apiClustersDestroyPostRaw();
    }

    /**
     */
    async apiClustersGetRaw(): Promise<runtime.ApiResponse<Array<ClusterResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/clusters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ClusterResponseFromJSON));
    }

    /**
     */
    async apiClustersGet(): Promise<Array<ClusterResponse>> {
        const response = await this.apiClustersGetRaw();
        return await response.value();
    }

    /**
     */
    async apiDealsAppsumoApplyPostRaw(requestParameters: ApiDealsAppsumoApplyPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/deals/appsumo/apply`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ApplyAppSumoRequestToJSON(requestParameters.applyAppSumoRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiDealsAppsumoApplyPost(applyAppSumoRequest?: ApplyAppSumoRequest): Promise<void> {
        await this.apiDealsAppsumoApplyPostRaw({ applyAppSumoRequest: applyAppSumoRequest });
    }

    /**
     */
    async apiJobsJobIdStatusGetRaw(requestParameters: ApiJobsJobIdStatusGetRequest): Promise<runtime.ApiResponse<JobStatusResponse>> {
        if (requestParameters.jobId === null || requestParameters.jobId === undefined) {
            throw new runtime.RequiredError('jobId','Required parameter requestParameters.jobId was null or undefined when calling apiJobsJobIdStatusGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/jobs/{jobId}/status`.replace(`{${"jobId"}}`, encodeURIComponent(String(requestParameters.jobId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => JobStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiJobsJobIdStatusGet(jobId: string | null): Promise<JobStatusResponse> {
        const response = await this.apiJobsJobIdStatusGetRaw({ jobId: jobId });
        return await response.value();
    }

    /**
     */
    async apiPaymentCouponCodePostRaw(requestParameters: ApiPaymentCouponCodePostRequest): Promise<runtime.ApiResponse<ApplyCouponResponse>> {
        if (requestParameters.code === null || requestParameters.code === undefined) {
            throw new runtime.RequiredError('code','Required parameter requestParameters.code was null or undefined when calling apiPaymentCouponCodePost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/payment/coupon/{code}`.replace(`{${"code"}}`, encodeURIComponent(String(requestParameters.code))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ApplyCouponResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPaymentCouponCodePost(code: string | null): Promise<ApplyCouponResponse> {
        const response = await this.apiPaymentCouponCodePostRaw({ code: code });
        return await response.value();
    }

    /**
     */
    async apiPaymentCouponGetRaw(): Promise<runtime.ApiResponse<CouponCodeResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/payment/coupon`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CouponCodeResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPaymentCouponGet(): Promise<CouponCodeResponse> {
        const response = await this.apiPaymentCouponGetRaw();
        return await response.value();
    }

    /**
     */
    async apiPaymentMethodsCurrentGetRaw(): Promise<runtime.ApiResponse<PaymentMethodResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/payment/methods/current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentMethodResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPaymentMethodsCurrentGet(): Promise<PaymentMethodResponse> {
        const response = await this.apiPaymentMethodsCurrentGetRaw();
        return await response.value();
    }

    /**
     */
    async apiPaymentMethodsPaymentMethodIdPutRaw(requestParameters: ApiPaymentMethodsPaymentMethodIdPutRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.paymentMethodId === null || requestParameters.paymentMethodId === undefined) {
            throw new runtime.RequiredError('paymentMethodId','Required parameter requestParameters.paymentMethodId was null or undefined when calling apiPaymentMethodsPaymentMethodIdPut.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/payment/methods/{paymentMethodId}`.replace(`{${"paymentMethodId"}}`, encodeURIComponent(String(requestParameters.paymentMethodId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiPaymentMethodsPaymentMethodIdPut(paymentMethodId: string | null): Promise<void> {
        await this.apiPaymentMethodsPaymentMethodIdPutRaw({ paymentMethodId: paymentMethodId });
    }

    /**
     */
    async apiPlansDemoGetRaw(): Promise<runtime.ApiResponse<PlanResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/plans/demo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPlansDemoGet(): Promise<PlanResponse> {
        const response = await this.apiPlansDemoGetRaw();
        return await response.value();
    }

    /**
     */
    async apiPlansGetRaw(): Promise<runtime.ApiResponse<Array<PlanResponse>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PlanResponseFromJSON));
    }

    /**
     */
    async apiPlansGet(): Promise<Array<PlanResponse>> {
        const response = await this.apiPlansGetRaw();
        return await response.value();
    }

    /**
     */
    async apiPlansProvisionDemoPostRaw(): Promise<runtime.ApiResponse<PlanProvisionResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/plans/provision/demo`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanProvisionResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPlansProvisionDemoPost(): Promise<PlanProvisionResponse> {
        const response = await this.apiPlansProvisionDemoPostRaw();
        return await response.value();
    }

    /**
     */
    async apiPlansProvisionPlanIdPostRaw(requestParameters: ApiPlansProvisionPlanIdPostRequest): Promise<runtime.ApiResponse<PlanProvisionResponse>> {
        if (requestParameters.planId === null || requestParameters.planId === undefined) {
            throw new runtime.RequiredError('planId','Required parameter requestParameters.planId was null or undefined when calling apiPlansProvisionPlanIdPost.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/plans/provision/{planId}`.replace(`{${"planId"}}`, encodeURIComponent(String(requestParameters.planId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PlanProvisionResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPlansProvisionPlanIdPost(planId: string | null): Promise<PlanProvisionResponse> {
        const response = await this.apiPlansProvisionPlanIdPostRaw({ planId: planId });
        return await response.value();
    }

    /**
     */
    async apiPullDogChangePlanPostRaw(requestParameters: ApiPullDogChangePlanPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/pull-dog/change-plan`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ChangePlanRequestToJSON(requestParameters.changePlanRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiPullDogChangePlanPost(changePlanRequest?: ChangePlanRequest): Promise<void> {
        await this.apiPullDogChangePlanPostRaw({ changePlanRequest: changePlanRequest });
    }

    /**
     */
    async apiPullDogProvisionPostRaw(requestParameters: ApiPullDogProvisionPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/pull-dog/provision`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProvisionRequestToJSON(requestParameters.provisionRequest),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiPullDogProvisionPost(provisionRequest?: ProvisionRequest): Promise<void> {
        await this.apiPullDogProvisionPostRaw({ provisionRequest: provisionRequest });
    }

    /**
     */
    async apiPullDogRepositoriesGetRaw(): Promise<runtime.ApiResponse<RepositoriesResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/pull-dog/repositories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => RepositoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPullDogRepositoriesGet(): Promise<RepositoriesResponse> {
        const response = await this.apiPullDogRepositoriesGetRaw();
        return await response.value();
    }

    /**
     */
    async apiPullDogSettingsGetRaw(): Promise<runtime.ApiResponse<SettingsResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/pull-dog/settings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SettingsResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiPullDogSettingsGet(): Promise<SettingsResponse> {
        const response = await this.apiPullDogSettingsGetRaw();
        return await response.value();
    }

    /**
     */
    async apiRegistryDemoLoginGetRaw(): Promise<runtime.ApiResponse<LoginResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/registry/demo/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiRegistryDemoLoginGet(): Promise<LoginResponse> {
        const response = await this.apiRegistryDemoLoginGetRaw();
        return await response.value();
    }

    /**
     */
    async apiRegistryLoginGetRaw(): Promise<runtime.ApiResponse<LoginResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/registry/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiRegistryLoginGet(): Promise<LoginResponse> {
        const response = await this.apiRegistryLoginGetRaw();
        return await response.value();
    }

    /**
     */
    async apiWebhooksGithubPullDogPostRaw(requestParameters: ApiWebhooksGithubPullDogPostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/webhooks/github/pull-dog`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: WebhookPayloadToJSON(requestParameters.webhookPayload),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiWebhooksGithubPullDogPost(webhookPayload?: WebhookPayload): Promise<void> {
        await this.apiWebhooksGithubPullDogPostRaw({ webhookPayload: webhookPayload });
    }

}
