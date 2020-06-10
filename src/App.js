import React from 'react';
import './App.css';
import { Carousel, Row, Col, Input } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Navigation from './components/Navigation.js';
import HeaderNavigation from './components/HeaderNavigation.js';
import OverlayLayout from './components/OverlayLayout.js'
import ThreeColSection from './components/ThreeColSection.js'
import Brand from './components/Brand.js'
import IconCard from './components/IconCard.js'
import { Tabs } from 'antd';
import { data } from './Data.js';

const { Search } = Input;
const { TabPane } = Tabs;

const { call_to_action, customer, about_us_card, about_us, product_view, product_update, navigation } = data;
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
        {/* <SectionC title={"Developer Bot for Slack"} subtitle={"One article to one random person in your Slack group. Once a day."} /> */}
        <Seperator />
        <Customer />
        <Seperator />

        <Seperator />
        <ProductUpdate />

        <Seperator />
        <Subscription />
        <Seperator />

        <Seperator />
        <Connection />
        <Seperator />

        <Seperator />
        <ContactUs />
        <Seperator />

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


function Header({ message, title }) {
  return (
    <>
      <div className="horizontal-padding">
        <HeaderNavigation />
        <h1 className="title">{title}</h1>
      </div>
      <Carousel autoplay>
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
  const content =
    (
      <ThreeColSection
        paragraph={about_us}
        content={about_us_card}>
      </ThreeColSection>
    );
  return (
    <section id={navigation.aboutus.id} className="about-us horizontal-padding">
      <Row>
        <Col span={leftSider} >
          <h2 className="heading">
            关于我们
          </h2>
        </Col >
        <Col span={19} offset={1}>
          {content}
        </Col>
      </Row >
    </section >
  )
}

function Product() {
  const verticalPosition = 68;
  const horizontalPosition = 48;

  return (
    <section id={navigation.product.id} className="product-viewer horizontal-padding">
      <Row>
        <Col span={leftSider}>
          <h2 className="heading">
            了解产品
          </h2>
        </Col>
      </Row>

      {
        product_view.map(
          (product, index) => {
            const { name, ename, description, image, text, icon, feature } = product;
            const Card = () => <IconCard
              key={index}
              header={name}
              preHeader={ename}
              text={description}
              link={'/'}
              image={icon}
            ></IconCard>;
            const Image = () => <img className="product-image" src={image} />;
            const side = <ThreeColSection
              paragraph={text}
              content={feature}>
            </ThreeColSection>
            if (index % 2 == 0) {
              return (<Row>
                <Col span={14}>
                  <OverlayLayout
                    backgroundStyle={{ position: 'absolute', top: verticalPosition, left: horizontalPosition, width: "80%", height: "100%" }}
                    frontStyle={{ position: 'absolute', top: 0, left: 0, width: '60%', }}
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
                <Row>
                  <Col span={10} className="product-feature">
                    {side}
                  </Col>
                  <Col span={14}>
                    <OverlayLayout
                      backgroundStyle={{ position: 'absolute', top: verticalPosition, left: horizontalPosition, width: "80%", height: "100%" }}
                      frontStyle={{ position: 'absolute', top: 0, right: 0, width: '60%', }}
                      BackgroundElement={Image}
                      FrontElement={Card}
                    >
                    </OverlayLayout>
                  </Col>
                </Row>)
            }
          }
        )
      }


    </section >
  )
}

function Customer() {
  const content =
    (
      <ThreeColSection
        paragraph={''}
        content={product_update} >
      </ThreeColSection >
    );
  const verticalPosition = 20;
  const horizontalPosition = 200;

  return (
    <section id="customer" className="customer">
      <Row>
        <Col span={leftSider}>
          <h2 className="heading">
            用户反馈
          </h2>
        </Col>
      </Row>
      <Row className="vertical-padding">
        <Col span={10}>

        </Col>
        <Col span={14} >
          <Tabs id="customer-tab" defaultActiveKey="1" >
            {customer.map((profile, index) => {
              const { title, name, description, image } = profile;
              const Card = () => <IconCard
                key={index}
                header={name}
                postHeader={title}
                text={description}
              ></IconCard>;
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
                  {/* <div style={{
                    position: 'absolute',
                    marginLeft: '-77%'
                  }}>
                    <Image />
                  </div>
                  <div className="filled-bg" style={{ position: 'absolute', left: '-40px' }}>
                    <Card />
                  </div> */}

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
      <ThreeColSection
        paragraph={''}
        content={product_update} >
      </ThreeColSection >
    );
  return (
    <section id={"sub"} className="sub horizontal-padding filled-bg">
      <Row className="vertical-padding">
        <Col span={leftSider}>
          <h2 className="heading filled-bg">
            产品动态
          </h2>
        </Col>
        <Col span={4} offset={2}>
          <div className="paragraph">
            订阅并关注最新产品动态
          </div>
          <br />
          <br />
          <span>QR CODE</span>
        </Col>
        <Col span={10} offset={2}>
          <div className="paragraph">
            {data.subscription}
          </div>
          <br />
          <div className="horizontal-padding">
            <Search
              placeholder="邮箱"
              enterButton="订阅"
              size="large"
              onSearch={value => console.log(value)}
            />
          </div>
        </Col >
      </Row >
    </section >
  )
}


function ProductUpdate() {
  const content =
    (
      <ThreeColSection
        paragraph={''}
        content={data.product_update}
        withDivider={true}>
      </ThreeColSection >
    );
  return (
    <section id={navigation.update.id} className="update horizontal-padding">
      <Row>
        <Col span={leftSider}>
          <h2 className="heading">
            最新动向
          </h2>
        </Col>
        <Col span={18} offset={1} >
          {content}
        </Col>
      </Row>
    </section>
  )
}

function Connection() {
  return (
    <section id="connection" className="connection horizontal-padding">
      <Row>
        <Col span={leftSider}>
          <h2 className="heading">
            合作伙伴
          </h2>
        </Col>
        <Col span={18} offset={1} >
          <div>
            <Row >
              <Col span={4}>
                <img
                  width={40} src={'./images/logo/36Kr.png'} />
              </Col >
              <Col span={4}>
                <img
                  width={40}
                  src={'./images/logo/Hourentang.png'} />
              </Col>
              <Col span={4}>
                <img
                  width={40}
                  src={'./images/logo/Tongrentang.png'} />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </section >
  )
}

function Team() {
  const content =
    (
      <>
        <div className="info-header">
          <h6 >{data.team}</h6>
        </div>
        <div ><img className="fullwidth-image" src={'./images/Team.png'} /></div>
      </>
    );
  return (
    <section id={navigation.team.id} className="team horizontal-padding">
      <Row>
        <Col span={leftSider}>
          <h2 className="heading">
            团队介绍
          </h2>
        </Col>
        <Col span={18} offset={1} >
          {content}
        </Col>
      </Row>
    </section>
  )
}

function ContactUs() {
  const content =
    (
      <ThreeColSection
        paragraph={''}
        content={data.contact}
        withDivider={true}>
      </ThreeColSection >
    );
  return (
    <section id={navigation.contactus.id} className=" horizontal-padding">
      < Row >
        <Col span={leftSider}>
          <h2 className="heading">
            联系我们
          </h2>
        </Col>
        <Col span={18} offset={1} >
          {content}
        </Col>
      </Row >
    </section >
  )
}


function Footer() {
  const colSpan = 2;
  return (
    <section id="footer" className="left-padding">
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
