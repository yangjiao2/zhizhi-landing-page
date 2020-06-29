import React from 'react';
import { Divider, Row, Col } from 'antd';
import IconCard from './IconCard.js'
import classNames from 'classnames';

function FixedColSection({ key, paragraph = '', content, withDivider = false, altBackgound = false, width }) {
    const len = content.length;
    return (
        <div className="flex-row" >
            {
                content.map(
                    (card, index) => {
                        const image = card.img;
                        return (
                            <div className="flex-item" style={{ width: width }}>
                                <div className={classNames({ "inline-block": true, 'left-border': withDivider })}                                >
                                    {image && <img className="media-image" src={image} />}
                                    <IconCard
                                        classname={altBackgound && (index % 2 === 1) && 'alt-background'}
                                        key={index}
                                        {...card} >
                                    </IconCard>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div >
    )
}


export default FixedColSection;
