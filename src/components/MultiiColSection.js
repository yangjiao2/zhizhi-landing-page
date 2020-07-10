import React from 'react';
import { Divider, Row, Col } from 'antd';
import IconCard from './IconCard.js'

function MultiColSection({ key, colCount = 3, paragraph = '', content, withDivider = false }) {
    const span = withDivider ? parseInt((24 - colCount + 1) / colCount) : parseInt(24 / colCount);
    return (
        <>
            <Row>
                <div className="paragraph"> {paragraph} </div>
            </Row>
            <Row>
                {
                    content.map(
                        (card, index) => {
                            if (index == 0) {
                                return (
                                    <>
                                        <Col span={withDivider ? span - 1 : span} >
                                            <IconCard
                                                key={index}
                                                {...card} ></IconCard>
                                        </Col>
                                    </>)
                            }
                            return (
                                <>
                                    {withDivider && (
                                        <Col span={1} >
                                            <Divider className="divider" type="vertical" />
                                        </Col>)
                                    }
                                    <Col span={withDivider ? span - 1 : span} >
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
