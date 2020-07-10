import React from 'react';
import { Row, Col, AutoComplete, Input, Button } from 'antd';
// import { msnodesqlv8 } from 'sql';
import sql from 'mssql';
import { data } from '../Data.js'


const { Connection, Request } = require("tedious");
const { db: { database, server, user, password } } = data;
const { db } = data;
// const { msnodesqlv8 } = mssql;

const queryString = "select * from user_profile";



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
