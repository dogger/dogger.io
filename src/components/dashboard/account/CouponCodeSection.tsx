import React, { useState, useMemo } from 'react';
import { Typography, TextField, Button, Box, Card, CardContent, Divider } from '@material-ui/core';
import { useGlobalResource } from '@fluffy-spoon/react-globalize';
import { couponCodeAccessor } from '../../../hooks/payment';
import { apiClient } from '../../../api/Client';

export function CouponCodeSection() {
    const [currentCouponCode, currentCouponCodeController] = useGlobalResource(couponCodeAccessor);
    const isLoading = useMemo(
        () => currentCouponCode === undefined,
        [currentCouponCode]);

    const [unsavedCouponCode, setUnsavedCouponCode] = useState('');

    const onApply = async () => {
        currentCouponCodeController.set(undefined);

        const result = await apiClient.apiPaymentCouponCodePost(unsavedCouponCode);
        if (result.wasApplied) {
            alert("Your coupon code has been applied!");
        } else {
            alert("The given code was not correct.");
        }

        await currentCouponCodeController.refresh();
    };

    return <>
        <Typography variant="h3" style={{
            marginBottom: 8
        }}>
            Discount
        </Typography>

        <Card style={{
            display: 'flex',
            width: 400
        }}>
            <CardContent style={{
                width: '100%'
            }}>
                {currentCouponCode ?
                    <>
                        <div style={{
                            marginBottom: 16
                        }}>
                            <Typography variant="h5">
                                {currentCouponCode.name}
                            </Typography>
                            {currentCouponCode.code}
                        </div>
                    </> :
                    <Typography variant="body1" style={{
                        marginBottom: 16,
                        opacity: 0.5
                    }}>
                        If you have a coupon code, you can apply it to your account to save on your next invoices.
                    </Typography>}
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <TextField
                        label="Coupon code"
                        value={unsavedCouponCode}
                        onChange={e => setUnsavedCouponCode(e.target.value)}
                        style={{
                            marginRight: 16,
                            width: '100%'
                        }} />
                    <Button
                        disabled={isLoading}
                        color="primary"
                        variant="contained"
                        style={{
                            alignSelf: 'flex-end'
                        }}
                        onClick={() => onApply()}
                    >
                        Apply
                    </Button>
                </Box>
            </CardContent>
        </Card>
    </>;
}