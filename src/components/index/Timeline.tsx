import React from 'react';

import { useTheme, useMediaQuery, Box } from "@material-ui/core";
import Img from "gatsby-image";

export const Timeline = (props: { entries: Array<{ title: string, text: JSX.Element, image: any }> }) => {
    const theme = useTheme();
    const isDownFromMedium = useMediaQuery(theme.breakpoints.down('sm'));

    const isDarkTheme = theme.palette.type === "dark";
    const linkColor = isDarkTheme ?
        "rgba(0,0,0,0.25)" :
        "rgba(0,0,0,0.08)";

    let isLeft = true;

    return <div style={{
        display: 'flex',
        flexDirection: 'column'
    }}>
        {props
            .entries
            .map((entry, index) => {
                const elements = new Array<JSX.Element>();

                const elementsVerticalMargin = 48;
                const elementsHorizontalMargin = 8;

                const bulletSize = 20;

                const linkWidth = 20;
                const linkMargin = 10;
                const linkBorderWidth = 2;

                const elementWidth = `${isDownFromMedium ? 100 : 50}vw - ${linkWidth * 2}px - ${linkMargin * (isDownFromMedium ? 1 : 2)}px - ${elementsHorizontalMargin}px`;
                const maxElementWidth = 450;

                const calc = (inner: string) => `calc(${inner})`;

                const linkElement = <div style={{
                    height: 1,
                    borderTop: `${linkBorderWidth}px dashed ${linkColor}`,
                    width: linkWidth,
                    alignSelf: 'flex-start',
                    margin: linkMargin,
                    marginTop: bulletSize / 2
                }} />

                const imageOffset = isDownFromMedium ? -30 : 50;
                const imageElement =
                    <Img alt="Timeline screenshot" fluid={entry.image} style={{
                        width: calc(elementWidth),
                        maxWidth: maxElementWidth,
                        borderRadius: 10,
                        marginTop: -imageOffset,
                        marginLeft: 0,
                        marginRight: 0,
                        boxShadow: '0px 0px 28px 6px rgba(0,0,0,0.05)',
                        borderWidth: 1,
                        borderColor: 'rgba(0,0,0,0.05)',
                        borderStyle: 'solid',
                        objectFit: 'contain',
                        alignSelf: 'flex-start'
                    }} />;

                const contentElement =
                    <div style={{
                        width: calc(elementWidth),
                        maxWidth: maxElementWidth,
                        textAlign: isLeft ? 'right' : 'left',
                        marginTop: -12
                    }}>
                        <div style={{
                            fontSize: 40
                        }}>{entry.title}</div>
                        <div style={{
                            marginTop: 8,
                            opacity: 0.75,
                            fontSize: 16
                        }}>{entry.text}</div>
                        {isDownFromMedium && imageElement}
                    </div>;

                const bulletElement =
                    <>
                        <div style={{
                            position: 'relative'
                        }}>
                            <Box boxShadow={2} style={{
                                backgroundColor: theme.palette.primary.main,
                                width: bulletSize,
                                height: bulletSize,
                                borderRadius: bulletSize * 2,
                                alignSelf: 'flex-start'
                            }} />
                            {index !== props.entries.length - 1 && <div style={{
                                borderRight: `2px solid ${linkColor}`,
                                position: 'absolute',
                                top: bulletSize + linkMargin,
                                left: bulletSize / 2 - 1,
                                bottom: -elementsVerticalMargin * 2 + linkMargin
                            }} />}
                        </div>
                    </>;

                elements.push(...(isLeft ?
                    [contentElement, linkElement] :
                    [!isDownFromMedium && imageElement, linkElement]).filter(x => !!x));

                elements.push(bulletElement);

                elements.push(...(!isLeft ?
                    [linkElement, contentElement] :
                    [!isDownFromMedium && linkElement, !isDownFromMedium && imageElement]).filter(x => !!x));

                if (!isDownFromMedium)
                    isLeft = !isLeft;

                return <div key={`timeline-entry-${index}`} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: elementsVerticalMargin,
                    marginBottom: elementsVerticalMargin,
                    marginLeft: elementsHorizontalMargin,
                    marginRight: elementsHorizontalMargin
                }}>
                    {elements}
                </div>;
            })}
    </div>;
}