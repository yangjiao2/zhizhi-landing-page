import React from 'react';
import { Layout, } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function SiderLayout({ key, sider, content, siderStyle, contentStyle, hasRightPadding = true }) {
    // window.screen.width < 736
    if (window.screen.width < 736) {
        return (
            <div>
                <Layout>
                    <Sider
                        width={105}
                        style={{
                            minWidth: '105px',
                            backgroundColor: 'white',
                            ...siderStyle,
                        }}
                    >
                        {sider}
                    </Sider>
                    <Layout className="site-layout" style={{
                        backgroundColor: 'white',
                        ...contentStyle,
                    }}>
                        <Content>
                            {content}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
    return (
        <div>
            <Layout>
                <Sider
                    width={305}
                    style={{
                        minWidth: '305px',
                        paddingLeft: '120px',
                        backgroundColor: 'white',
                        ...siderStyle,
                    }}
                >
                    {sider}
                </Sider>
                <Layout className="site-layout" style={{
                    backgroundColor: 'white',
                    paddingRight: '120px',
                    ...contentStyle,
                }}>
                    <Content>
                        {content}
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}


export default SiderLayout;
