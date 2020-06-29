import React from 'react';
import { Row, Col, AutoComplete, Input, Button } from 'antd';
import classNames from 'classnames';

function EmailSubmission({ buttonText = '订阅', classname = '' }) {
    return (
        <Input.Group compact>
            <AutoComplete
                style={{ width: '30vw' }}
                placeholder="您的邮箱"
            />
            <Button size='middle' ghost > {buttonText}</Button>
        </Input.Group>
    )
}


export default EmailSubmission;
