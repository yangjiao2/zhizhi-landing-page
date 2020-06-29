import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import classNames from 'classnames';

function IconCard({ key, image, header, text, link, info, preHeader, postHeader, linkText = '查看更多', classname = '' }) {
    return (
        <div className={classNames("icon-card", classname)} key={key}>
            {info && <Row>
                <div className="pre-text">
                    <span >{info}</span>
                </div>
            </Row>}
            <Row >
                {image && <Col span={header ? 10 : 24}>
                    <img src={image.toString()} />
                </Col >
                }
                {header && <Col span={image ? 14 : 24}>
                    <div >
                        <Row>
                            {preHeader &&
                                <div className="pre-text">
                                    <span >{preHeader}</span>
                                </div>
                            }
                        </Row>
                        <Row>
                            <div className="info-header">
                                <span >{header}</span>
                            </div>
                        </Row>
                        <Row>
                            {postHeader &&
                                <div className="post-text">
                                    <span >{postHeader}</span>
                                </div>
                            }
                        </Row>
                    </div>
                </Col>}
            </Row>

            {text && <Row >
                <div className="info-text" >
                    {text}
                </div>
            </Row >
            }
            {link && <Row >
                <div className="info-text" >
                    <Link to={link}>
                        <span className="navigation-link">
                            {linkText}  <i className="fa fa-long-arrow-right"></i>
                        </span>
                    </Link>
                </div>
            </Row >
            }
        </div >
    )
}


export default IconCard;
