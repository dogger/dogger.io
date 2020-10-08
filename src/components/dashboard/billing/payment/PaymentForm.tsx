import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { PaymentMethod } from '@stripe/stripe-js';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
import { useTheme } from '@material-ui/core/styles';

import poweredByStripeDarkImage from '../../../../../static/images/stripe/powered_by_stripe_dark.svg';
import poweredByStripeLightImage from '../../../../../static/images/stripe/powered_by_stripe_light.svg';

type Props = {
    onSubmit: (paymentMethod: PaymentMethod) => void;
};

export const PaymentForm = (props: Props) => {
    const theme = useTheme();
    const ELEMENT_OPTIONS = {
        style: {
            base: {
                fontSize: '25px',
                color: theme.palette.text.primary,
                letterSpacing: '0.025em',
                '::placeholder': {
                    color: theme.palette.text.hint,
                }
            },
            invalid: {
                color: theme.palette.error.main,
            },
        },
    };

    const stripe = useStripe();
    const elements = useElements();

    const labelStyle = {
        marginTop: 16,
        display: 'inline-block'
    };

    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
    
        const cardElement = elements.getElement(CardNumberElement);
    
        const addedPaymentMethod = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });
        
        props.onSubmit(addedPaymentMethod.paymentMethod);
    }

    return <form onSubmit={e => handleSubmit(e)} style={{
        width: 300
    }}>
        <label htmlFor="cardNumber" style={{...labelStyle, marginTop: 0}}>Card number</label>
        <CardNumberElement id="cardNumber" options={ELEMENT_OPTIONS} />
        
        <label htmlFor="cardExpiration" style={labelStyle}>Card expiration</label>
        <CardExpiryElement id="cardExpiration" options={ELEMENT_OPTIONS} />
        
        <label htmlFor="cardCvc" style={labelStyle}>CVC</label>
        <CardCvcElement id="cardCvc" options={ELEMENT_OPTIONS} />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 24
        }}>
            <Button disabled={isLoading} color="primary" type="submit" variant="contained">
                Save
            </Button>
            <img 
                src={theme.palette.type === "dark" ? 
                    poweredByStripeLightImage : 
                    poweredByStripeDarkImage} 
                alt="Powered by Stripe" 
                style={{
                    display: 'flex',
                    alignSelf: 'center',
                    marginLeft: 16
                }} />
        </div>
    </form>;
};