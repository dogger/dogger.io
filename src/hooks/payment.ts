/* eslint-disable react-hooks/exhaustive-deps */
import { apiClient, withAuthenticatedApiClient } from "../api/Client";
import HttpStatus from 'http-status-codes';
import { useState, useEffect } from "react";
import { useAuth0 } from "../auth/Auth0Provider";
import { createGlobalResource, useGlobalResource } from '@fluffy-spoon/react-globalize';

export const couponCodeAccessor = createGlobalResource(
    withAuthenticatedApiClient(async () => {
        const couponCodeResponse = await apiClient.apiPaymentCouponGetRaw();
        if(couponCodeResponse.raw.status === HttpStatus.NO_CONTENT)
            return null;

        return await couponCodeResponse.value();
    }))

const paymentMethodAccessor = createGlobalResource(
    withAuthenticatedApiClient(async () => {
        const paymentMethodResponse = await apiClient.apiPaymentMethodsCurrentGetRaw();
        if(paymentMethodResponse.raw.status === HttpStatus.NO_CONTENT)
            return null;

        return await paymentMethodResponse.value();
    }));

export function usePaymentMethod() {
    const {isAuthenticated} = useAuth0();

    const [paymentMethodId, setPaymentMethodId] = useState<string>(void 0);

    const [paymentMethod, paymentMethodControls] = useGlobalResource(paymentMethodAccessor);

    useEffect(
        () => {
            if(!paymentMethodId || !isAuthenticated) 
                return;

            apiClient
                .apiPaymentMethodsPaymentMethodIdPut(paymentMethodId)
                .then(paymentMethodControls.refresh)
                .then(() => setPaymentMethodId(void 0));
            ;
        }, 
        [
            paymentMethodId,
            isAuthenticated
        ]);

    return [paymentMethod, setPaymentMethodId] as [
        typeof paymentMethod,
        typeof setPaymentMethodId
    ];
}
