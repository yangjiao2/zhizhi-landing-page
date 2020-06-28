import React from 'react';
import { Divider, Row, Col } from 'antd';
import IconCard from './IconCard.js'

function MultiColSection({ key, colCount = 3, paragraph = '', content, withDivider = false }) {
    const span = parseInt(24 / colCount);
    return (
        <>
            <Row>
                <div className="paragraph"> {paragraph} </div>
            </Row>
            <Row>
                {
                    content.map(
                        (card, index) => {
                            return (
                                <>
                                    {withDivider && (
                                        <Col span={1} >
                                            <Divider className="divider" type="vertical" />
                                        </Col>)
                                    }
                                    <Col span={withDivider ? 7 : 8} >
                                        <IconCard
                                            key={index}
                                            {...card} ></IconCard>
                                    </Col>
                                </>)
                        }
                    )
                }
            </Row>
        </>
    )
}


export default MultiColSection;
