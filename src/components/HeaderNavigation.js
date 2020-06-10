import React from 'react';
import { Row, Col } from 'react-grid-system';
import Brand from './Brand.js'
import { data } from '../Data.js';
const { navigation } = data;

function HeaderNavigation({ includeBranding = true }) {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-white">
                <Brand />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        {
                            Object.values(navigation).map(
                                nav => {
                                    var href = "#" + nav.id;
                                    console.log(href);
                                    return (
                                        <li class="nav-item active ">
                                            <a class="nav-link" href={href}>
                                                {nav.text}
                                            </a>
                                        </li>
                                    );
                                }
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default HeaderNavigation;
