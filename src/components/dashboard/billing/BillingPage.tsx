import { PaymentInformationSection } from './payment/PaymentInformationSection';
import { CouponCodeSection } from './CouponCodeSection';

import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { Divider } from '@material-ui/core';

export const BillingPage = (props: RouteComponentProps) => {
    return <>
        <PaymentInformationSection />
        <Divider style={{
            margin: 40
        }} />
        <CouponCodeSection />
    </>
}