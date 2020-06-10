import React from 'react';
import { Link } from 'react-router-dom'

function Brand({ includeFootnote = false }) {
    return (
        <>
            <Link to="/">
                <img width={160} src="/images/CompanyLogo.png" alt="" />
            </Link>
            {includeFootnote &&
                <div className="pre-text">
                    &copy; Copyright 2020 <span className="pre-text">致知力行</span>
                </div>}
        </>

    )
}


export default Brand;
