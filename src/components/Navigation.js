import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom'
import Brand from './Brand.js'
import { data } from '../Data.js';
const { navigation } = data;

function Navigation({ includeBranding = true }) {
  return (
    <div className="navigation">
      <Row>
        {
          includeBranding &&
          <><Col span={4}>
            <Brand />
          </Col>
            <Col span={1} >
            </Col>
          </>
        }
        {Object.values(navigation).map(
          nav => {
            var href = "#" + nav.id;
            console.log(href);
            return (
              <Col span={3} >
                <a href={href}>
                  <span className="navigation-link filled-bg">
                    {nav.text}
                  </span>
                </a>
              </Col>
            );
          }
        )
        }
      </Row>
    </div>
  )
}


export default Navigation;
