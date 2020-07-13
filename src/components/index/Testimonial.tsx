import React, { useState, useEffect } from "react";

import { useTheme, Box, Typography, makeStyles, Theme, Avatar } from "@material-ui/core";
import { FormatQuote, Twitter, GitHub, CallSplit, Star } from "@material-ui/icons";

const useStyles = makeStyles({
    accentColor: (existingTheme: Theme) => ({
        color: existingTheme.palette.type === "dark" ?
            'white' :
            existingTheme.palette.primary.main
    })
});

export const Testimonial = (props: {
    twitterHandle: string,
    name: string,
    title: string,
    company: string,
    message: string,
    profilePictureUrl: string,
    logoUrl: string,
    gitHubName: string,
    websiteUrl: string
}) => {
    const theme = useTheme();
    const styles = useStyles(theme);
    const [repositoryResponse, setRepositoryResponse] = useState<{ stargazers_count: number, forks_count: number }>(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/' + props.gitHubName)
            .then(response => response.json())
            .then(setRepositoryResponse);
    }, [props.gitHubName]);

    const isDarkTheme = theme.palette.type === "dark";
    return <Box style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        <Box style={{
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <a target="_blank" href={props.websiteUrl} rel="nofollow noopener noreferrer">
                <img src={props.logoUrl} alt={props.company + " logo"} style={{
                    filter: "grayscale(1) contrast(1000%)" + (!isDarkTheme ? " invert(100%)" : ""),
                    opacity: 0.3,
                    maxWidth: 250
                }} />
            </a>
        </Box>
        <Box style={{
            maxWidth: 720,
            paddingTop: 24,
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Typography component="span" variant="body1" style={{
                fontSize: '30px',
                textAlign: 'justify'
            }}>
                <FormatQuote className={styles.accentColor} style={{
                    fontSize: '40px',
                    marginRight: 8,
                    display: 'inline-block'
                }} />
                <span style={{
                    opacity: 0.75
                }}>
                    "{props.message}"
                </span>
            </Typography>
            <Box style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingTop: 48
            }}>
                <Box style={{
                    alignSelf: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Avatar src={props.profilePictureUrl} style={{
                        marginRight: 12,
                        width: 48,
                        height: 48
                    }} />
                    <Box>
                        <Typography style={{
                            fontWeight: 'bold'
                        }}>
                            {props.name}
                        </Typography>
                        <Typography style={{
                            opacity: 0.5
                        }}>
                            {props.title}
                        </Typography>
                        <Typography style={{
                            paddingTop: 4
                        }}>
                            <Twitter className={styles.accentColor} style={{
                                fontSize: 17,
                                marginRight: 4,
                                display: 'inline-block'
                            }} />
                            <a target="_blank" href="https://twitter.com/Tony_Lapenna" rel="nofollow noopener noreferrer" className={styles.accentColor} style={{
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                position: 'relative',
                                top: -3,
                                fontSize: 12
                            }}>
                                {props.twitterHandle}
                            </a>
                        </Typography>
                    </Box>
                </Box>
                <Box style={{
                    alignSelf: 'flex-start',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <GitHub style={{
                        fontSize: '48px',
                        marginRight: 12
                    }} />
                    <Box>
                        <Typography style={{
                            fontWeight: 'bold'
                        }}>
                            <a target="_blank" href={"https://github.com/" + props.gitHubName} rel="nofollow noopener noreferrer" style={{
                                textDecoration: 'none'
                            }}>
                                {props.gitHubName}
                            </a>
                        </Typography>
                        <Typography style={{
                            opacity: 0.5,
                            marginTop: 2
                        }}>
                            <span>
                                <Star style={{
                                    fontSize: 17,
                                    marginLeft: -2
                                }} /> 
                                <span style={{
                                    textDecoration: 'none',
                                    position: 'relative',
                                    top: -3,
                                    fontSize: 12
                                }}>
                                    {repositoryResponse?.stargazers_count || "..."}
                                </span>
                            </span>
                            <span>
                                <CallSplit style={{
                                    fontSize: 17,
                                    marginLeft: 8
                                }} /> 
                                <span style={{
                                    textDecoration: 'none',
                                    position: 'relative',
                                    top: -3,
                                    fontSize: 12
                                }}>
                                    {repositoryResponse?.forks_count || "..."}
                                </span>
                            </span>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>;
}