import React, { ReactFragment } from 'react';
import { Typography } from '@material-ui/core';

export const BenefitGridItem = (props: { icon: JSX.Element, title: string, description: ReactFragment }) => {
    return <>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 48
        }}>
            <div style={{
                alignSelf: 'center'
            }}>
                {props.icon}
            </div>
            <Typography component="h4" style={{
                fontSize: '24px',
                textAlign: 'center',
                padding: 16,
                paddingTop: 24
            }}>
                {props.title}
            </Typography>
            <Typography variant="body1" component="p" style={{
                opacity: 0.75,
                fontSize: '18px',
                textAlign: 'center'
            }}>
                {props.description}
            </Typography>
        </div>
    </>;
}