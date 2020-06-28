import React from 'react';
import ReactDOM from 'react-dom';
function OverlayLayout({ key, backgroundStyle, frontStyle,
    BackgroundElement, FrontElement }) {
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
