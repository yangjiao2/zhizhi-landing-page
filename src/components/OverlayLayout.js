import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

function OverlayLayout({ key, backgroundStyle, frontStyle,
    BackgroundElement, FrontElement }) {
    console.log(BackgroundElement);
    console.log(FrontElement);
    console.log(backgroundStyle);
    return (
        <>
            <div style={backgroundStyle}>
                <BackgroundElement />
            </div>
            <div className="filled-bg" style={frontStyle}>
                <FrontElement />
            </div>
        </>
    )
}


export default OverlayLayout;
