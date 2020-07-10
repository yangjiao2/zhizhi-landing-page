import React from 'react';
import './App.css';
import { Carousel, Row, Col, Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation.js';
import HeaderNavigation from './components/HeaderNavigation.js';
import OverlayLayout from './components/OverlayLayout.js'
import MultiColSection from './components/MultiiColSection.js'
import FixedColSection from './components/FixedColSection.js'
import Brand from './components/Brand.js'
import IconCard from './components/IconCard.js'
import SiderLayout from './components/SiderLayout.js'
import EmailSubmission from './components/EmailSubmission.js'
import { Tabs } from 'antd';
import { data } from './Data.js';

const { TabPane } = Tabs;

const { call_to_action, customer, connection, about_us_card, about_us, product_view, product_update, media_update, navigation } = data;
const leftSider = 4;

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/demo" component={Demo} /> */}
      </div>
    </Router>
  );
}

function LandingPage() {
  return (
    <div className="App">
      <div className="landing-page">

        <Header messages={false} title={call_to_action} />
        {/* <Slider></Slider> */}
        <Seperator />
        <AboutUs />

        <Seperator />
        <Product />

        <Seperator />
        <Customer />

        <Seperator />
        <Seperator />
        <Subscription />

        <Seperator />
        <ProductUpdate />

        <Seperator />
        <MediaUpdate />

        <Seperator />
        <Connection />

        <Seperator />
        <ContactUs />

        <Seperator />
        <Team />

        <Seperator />
        <Footer />

      </div>
    </div >
  )
}

function Seperator() {
  return <div className="seperator" />
}

function SectionSeperator() {
  return <div className="section-seperator" />
}


function Header({ message, title }) {
  return (
    <>
      <div className="nav-padding">
        <HeaderNavigation />
        <h1 className="title">{title}</h1>
      </div>
      <Carousel style={{ width: '100vw' }} autoplay>
        <div >
          <img className='carousel-image' src="/images/slider/Slider1.png" />
        </div>
        <div>
          <img className='carousel-image' src="/images/slider/Slider1.png" />
        </div>
      </Carousel>

    </>
  )
}

function AboutUs() {
  const content = (
    <MultiColSection
      paragraph={about_us}
      content={about_us_card}>
    </MultiColSection>
  );
  return (
    <section id={navigation.aboutus.id} className="about-us horizontal-padding1">
      <SiderLayout
        sider={
          <h3 className="heading">
            关于我们
        </h3>
        }
        content={content}
      ></SiderLayout>
    </section >
  )
}

function Product() {
  const verticalPosition = 68;
  const horizontalPosition = 48;
  const horizontalPosition2 = 36;
  const imageStyle = { position: 'absolute', width: "80%", height: "100%" };
  const textStyle = { position: 'absolute', width: "60%" };
  return (
    <section id={navigation.product.id} className="product-viewer">
      <SiderLayout
        sider={
          <h3 className="heading">
            了解产品
        </h3>
        }
        content={null}
      ></SiderLayout >
      <br />
      <div className="horizontal-padding">
        {
          product_view.map(
            (product, index) => {
              const { name, ename, description, image, text, icon, feature, linkText } = product;
              const Card = () => <IconCard
                key={index}
                header={name}
                preHeader={ename}
                text={description}
                linkText={linkText}
                link={'/'}
                image={icon}
              ></IconCard>;
              const Image = () => <img className="product-image" src={image} />;
              const side = <MultiColSection
                paragraph={text}
                content={feature}>
              </MultiColSection>
              if (index % 2 == 0) {
                return (
                  <Row>
                    <Col span={14}>
                      <OverlayLayout
                        backgroundStyle={{ top: verticalPosition, left: 0, ...imageStyle }}
                        frontStyle={{ top: 0, left: -horizontalPosition, ...textStyle }}
                        BackgroundElement={Image}
                        FrontElement={Card}
                      >
                      </OverlayLayout>
                    </Col>
                    <Col span={10} className="product-feature">
                      {side}
                    </Col>
                  </Row>);
              } else {
                return (
                  <>
                    <SectionSeperator />
                    <Row>
                      <Col span={10} className="product-feature">
                        {side}
                      </Col>
                      <Col span={14}>
                        <OverlayLayout
                          backgroundStyle={{ top: verticalPosition, right: 0, textAlign: 'right', ...imageStyle }}
                          frontStyle={{ top: 0, right: -horizontalPosition2, ...textStyle, }}
                          BackgroundElement={Image}
                          FrontElement={Card}
                        >
                        </OverlayLayout>
                      </Col>
                    </Row>
                  </>)
              }
            }
          )
        }
      </div>

    </section >
  )
}

function Customer() {
  const content =
    (
      <MultiColSection
        paragraph={''}
        content={product_update} >
      </MultiColSection >
    );
  const verticalPosition = 20;
  const horizontalPosition = 200;

  return (
    <section id="customer" className="customer horizontal-padding">
      < Row >
        <Col span={leftSider} className="section-title">
          {/* <h2 className="heading">
            用户反馈
          </h2> */}
        </Col>
      </Row >
      <Row className="vertical-padding">
        <Col span={10}>
        </Col>
        <Col span={14} >
          <Tabs id="customer-tab" defaultActiveKey="1" >
            {customer.map((profile, index) => {
              const { title, name, description, image, feature } = profile;
              const Card = () =>
                <>
                  <div className="customer-profile">
                    <IconCard
                      key={index}
                      header={name}
                      postHeader={title}
                      text={description}
                    ></IconCard>
                  </div>
                  <div className="customer-feature">
                    <MultiColSection
                      paragraph={''}
                      colCount={feature.length}
                      content={feature} >
                    </MultiColSection >
                  </div>
                </>;
              const Image = () => <img className="customer-image" src={image} />;
              return (
                <TabPane tab={title} key={index + 1} >
                  <OverlayLayout
                    backgroundStyle={{
                      position: 'absolute',
                      marginLeft: '-77%'
                    }}
                    frontStyle={{ position: 'absolute', width: '100%', }}
                    BackgroundElement={Image}
                    FrontElement={Card}
                  >
                  </OverlayLayout>
                </TabPane>
              );
            })
            }
          </Tabs>
        </Col >
      </Row >
    </section >
  )
}


function Subscription() {
  const content =
    (
      <MultiColSection
        paragraph={''}
        content={product_update} >
      </MultiColSection >
    );
  return (
    <section id={"sub"} className="sub  top-padding filled-bg">
      <SiderLayout
        sider={
          <h3 className="heading filled-bg">
            产品动态
        </h3>
        }

        content={<Row>
          <Col span={6} offset={2}>
            <div className="paragraph">
              订阅并关注最新产品动态
          </div>
            <br />
            <br />
            <span>QR CODE</span>
          </Col>
          <Col span={14} offset={2}>
            <div className="paragraph">
              {data.subscription}
            </div>
            <br />
            <div className="horizontal-padding1">
              <EmailSubmission />
            </div>
          </Col >
        </Row >}
        siderStyle={{
          backgroundColor: '#3964fe',
        }}
        contentStyle={{
          backgroundColor: '#3964fe',
        }}
      ></SiderLayout>

    </section >
  )
}


function ProductUpdate() {
  const content =
    (
      <FixedColSection
        paragraph={''}
        content={[...product_update]}
        withDivider={true}
        width={370}>
      </FixedColSection >
    );
  return (
    <section id={navigation.update.id} className="update">
      <SiderLayout
        sider={
          <h3 className="heading">
            最新动向
        </h3>
        }
        content={content}
        contentStyle={{ paddingRight: '0px' }}
      ></SiderLayout >
    </section>
  )
}


function MediaUpdate() {
  const content =
    (
      <FixedColSection
        paragraph={''}
        content={[...media_update]}
        withDivider={false}
        width={370}
        altBackgound={true}>
      </FixedColSection >
    );
  return (
    <section id={"media-update"} className="media-update">
      <SiderLayout
        sider={
          <h3 className="heading">
            博客
        </h3>
        }
        content={content}
        contentStyle={{ paddingRight: '0px' }}
      ></SiderLayout >
    </section>
  )
}


function Connection() {
  const imageWidth = 128;
  const colSpan = 24 / connection.length;
  return (
    <section id="connection" className="connection">
      <SiderLayout
        sider={
          <h3 className="heading">
            合作伙伴
        </h3>
        }
        content={<div>
          <Row >
            {
              connection.map(parter => {
                return (<Col span={colSpan} >
                  <img
                    width={imageWidth} src={parter} />
                </Col >)
              }
              )
            }
          </Row>
        </div>}
      ></SiderLayout >
    </section >
  )
}

function Team() {
  const content =
    (
      <>
        <div ><img className="fullwidth-image" src={'./images/Team.png'} /></div>
        <div className="paragraph team-padding-top">
          {data.team}
        </div>
      </>
    );
  return (
    <section id={navigation.team.id} className="team">
      <SiderLayout
        sider={
          <h3 className="heading">
            团队介绍
        </h3>
        }
        content={<div>
          {content}
        </div>}
      ></SiderLayout >
    </section>
  )
}

function ContactUs() {
  const content =
    (
      <MultiColSection
        paragraph={''}
        colCount={2}
        content={data.contact}
        withDivider={true}>
      </MultiColSection >
    );
  return (
    <section id={navigation.contactus.id} className="contact-us">

      <SiderLayout
        sider={
          <h3 className="heading">
            联系我们
        </h3>
        }
        content={<div>
          {content}
        </div>}
      ></SiderLayout >
    </section >
  )
}


function Footer() {
  const colSpan = 2;
  return (
    <section id="footer" className="left-padding footer">
      <Row>
        <Col span={leftSider}>
          <Brand includeFootnote={true} />
        </Col>
        <Col span={5} offset={1} className="filled-bg">
        </Col>
        <Col span={12} className="filled-bg vertical-padding horizontal-padding">
          <div className="">
            <Row>
              <Navigation includeBranding={false} />
            </Row>
            <Seperator />
            <Row>
              <div className="navigation">
                <ul className="social-links">
                  <li ><a href=""><i className="filled-bg fa fa-wechat "></i></a></li>
                  <li><a href=""><i className="filled-bg fa fa-weibo"></i></a></li>
                  <li><a href=""><i className="filled-bg fa fa-facebook"></i></a></li>
                  <li ><a href=""><i className="filled-bg fa fa-twitter"></i></a></li>
                  <li ><a href=""><i className="filled-bg fa fa-youtube-play"></i></a></li>
                  <li ><a href=""><i className="filled-bg fa fa-medium"></i></a></li>
                  <li ><a href=""><i className="filled-bg fa fa-instagram"></i></a></li>
                  <li ><a href=""><i className="filled-bg fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </Row>
          </div>
        </Col >
        <Col span={2} className="filled-bg">
        </Col>
      </Row >
    </section >
  )
}


export default App;
