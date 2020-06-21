import React from 'react';
import { Row, Col } from 'react-grid-system';
import { Input, message, AutoComplete, Button } from 'antd';

const { Search } = Input;


function EmailForm({ includeBranding = true }) {
    return (
        <div className="horizontal-padding">
            {/* <Input.Group>
                <AutoComplete
                    style={{ width: '60%' }}
                    placeholder="邮箱"
                />

                <Button type="primary">订阅</Button>
            </Input.Group> */}
            <Search
                placeholder="邮箱"
                enterButton="订阅"
                size="large"
                onSearch={value => {
                    message.success('感谢您的订阅');

                }}
            />
        </div>
    )
}


export default EmailForm;
