import React from 'react';
import { Typography, Card, CardContent, CircularProgress } from '@material-ui/core';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentForm } from './PaymentForm';
import { stripePromise } from '../../../../setup/stripe';
import { PaymentMethod } from '@stripe/stripe-js';
import { usePaymentMethod } from '../../../../hooks/payment';

export const PaymentInformationSection = () => {
    const [paymentMethod, setPaymentMethod] = usePaymentMethod();

    function onUpdatePaymentMethodClicked(method: PaymentMethod) {
        setPaymentMethod(method.id);
    }

    if (paymentMethod === void 0)
        return <CircularProgress />;

    return <>
        <Typography variant="h3">
            {paymentMethod ?
                "Payment method" :
                "Set payment method"}
        </Typography>
        <Card style={{
            display: 'flex',
            marginTop: 16,
            width: 500
        }}>
            <CardContent>
                {paymentMethod ?
                    <Typography variant="h6" style={{ 
                        textAlign: 'center',
                        padding: 24,
                        marginTop: 16
                    }}>
                        {paymentMethod.brand}
                    </Typography> :
                    <Elements stripe={stripePromise}>
                        <PaymentForm
                            onSubmit={onUpdatePaymentMethodClicked}
                        />
                    </Elements>}
            </CardContent>
        </Card>
    </>;
}