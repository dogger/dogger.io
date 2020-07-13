import React from 'react';
import { useTheme, Card, CardContent, Typography, Link, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles({
    accentColor: (existingTheme: Theme) => ({
        color: existingTheme.palette.type === "dark" ?
            'white' :
            existingTheme.palette.primary.main
    })
});

export const ProductCard = (props: {
    description: string,
    title: string,
    icon: JSX.Element,
    disabled?: boolean,
    anchor: string
}) => {
    const theme = useTheme();
    const styles = useStyles(theme);

    return <Card style={{
        maxWidth: 350,
        width: '100%',
        margin: 24,
        opacity: props.disabled ? 0.5 : 1
    }}>
        <CardContent style={{
            padding: 48,
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div style={{ textAlign: 'center' }}>
                {props.icon}
            </div>
            <Typography component="h1" style={{
                fontSize: '30px',
                textAlign: 'center',
                padding: 16,
                paddingTop: 24
            }}>
                {props.title}
            </Typography>
            <Typography variant="body1" component="p" style={{
                opacity: 0.75,
                fontSize: '18px'
            }}>
                {props.description}
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <Link href={props.disabled ? null : "#" + props.anchor} className={styles.accentColor} style={{
                fontSize: '20px',
                fontWeight: 'bold',
                paddingTop: 32,
                display: 'flex',
                alignSelf: 'center'
            }}>
                {props.disabled ?
                    "Coming soon" :
                    "Find out more"}
            </Link>
        </CardContent>
    </Card>;
}