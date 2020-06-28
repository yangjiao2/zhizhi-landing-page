import React from 'react';
import { Divider, Row, Col } from 'antd';
import IconCard from './IconCard.js'

function FixedColSection({ key, paragraph = '', content, withDivider = false, width = "50%" }) {
    const len = content.length;
    return (
        <div className="flex-row" >
            {
                content.map(
                    (card, index) => {
                        if (index != len) {
                            return (
                                <div className="flex-item" style={{ width: width }}>
                                    {/* {withDivider &&
                                        <div className="inline-block" style={{ height: "440px" }}>
                                            <Divider className="divider inline-block" type="vertical" style={{ height: "100%" }} />
                                        </div>
                                    } */}
                                    <div className="inline-block">
                                        <IconCard
                                            key={index}
                                            {...card} >

                                        </IconCard>
                                    </div>
                                </div>)
                        }
                        else {
                            return (
                                <div className="flex-item" style={{ width: width }}>
                                    {/* {withDivider &&
                                        <Divider className="divider inline-block" type="vertical" style={{ height: "100%" }} />
                                    } */}
                                    <div className="inline-block">
                                        <IconCard
                                            key={index}
                                            {...card} >
                                        </IconCard>
                                    </div>
                                    {/* {withDivider &&
                                        <Divider className="divider" type="vertical" />
                                    } */}
                                </div>)
                        }

                    }
                )
            }
        </div >
    )
}


export default FixedColSection;
