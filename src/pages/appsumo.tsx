import React, { useState } from 'react';

import { Box, Card, CardContent, useTheme, TextField, Button, makeStyles } from '@material-ui/core';

import darkAppSumoLogo from '../../static/images/appsumo/as-appsumo-logo-footer-dark.svg';
import lightAppSumoLogo from '../../static/images/appsumo/as-appsumo-logo-footer-light.svg';

import doggerLogo from '../../static/images/dogger-no-title.svg';
import { Favorite } from '@material-ui/icons';

import {apiClient} from '../api/Client';

const useStyles = makeStyles(() => ({
    formField: {
        margin: 16,
        marginTop: 0
    }
}));

export default () => {
    const theme = useTheme();
    const styles = useStyles();

    const urlParameters = typeof window !== "undefined" && new URLSearchParams(window.location.search);

    const [code, setCode] = useState(urlParameters?.get('code') || "");
    const [email, setEmail] = useState("");

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const onSubmit = async () => {
        setIsButtonDisabled(true);

        try {
            await apiClient.apiDealsAppsumoApplyPostRaw({
                applyAppSumoRequest: {
                    code: code,
                    email: email
                }
            });

            alert("The coupon code has been applied!\n\nYou'll now be taken to GitHub to install the GitHub app on your GitHub account.");
            window.location.href = 'https://github.com/apps/pull-dog/installations/new';
        } catch(ex) {
            if('ok' in ex) {
                const response = ex as Response;
                if(response.status === 404)
                    return alert("The given code does not exist. Make sure you have typed the right code.");

                if(response.status === 400)
                    return alert("The given code is incorrect, already applied for someone else, or not elligible for AppSumo.");

                if(response.status !== 200)
                    return alert("An error occured while applying your code. Try again later, or contact support.");
            }

            throw ex;
        } finally {
            setIsButtonDisabled(false);
        }
    };

    return (
        <Box style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'space-around'
        }}>
            <Box style={{
                display: 'flex',
                alignSelf: 'flex-start',
                paddingTop: 100,
                flexDirection: 'column',
                width: 600
            }}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 40,
                    justifyContent: 'space-between'
                }}>
                    <img 
                        src={theme.palette.type === "dark" ? 
                            lightAppSumoLogo :
                            darkAppSumoLogo} 
                        alt="AppSumo logo" 
                        style={{
                            width: 300
                        }} />
                    <Favorite style={{
                        fontSize: 60,
                        margin: 30,
                        color: '#e00000'
                    }} />
                    <img 
                        src={doggerLogo} 
                        alt="Pull Dog logo" 
                        style={{
                            height: 100
                        }} />
                </Box>
                <Card>
                    <CardContent style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <TextField 
                            label="GitHub account email" 
                            className={styles.formField} 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="The e-mail of your GitHub account" />
                        <TextField 
                            label="AppSumo Code" 
                            value={code}
                            onChange={e => setCode(e.target.value)}
                            className={styles.formField} />

                        <Button 
                            disabled={isButtonDisabled}
                            color="primary" 
                            variant="contained" 
                            className={styles.formField} 
                            style={{
                                marginTop: 48,
                                alignSelf: 'flex-end'
                            }}
                            onClick={() => onSubmit()}
                        >
                            Sign in
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
        };