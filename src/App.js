import React, { useState } from 'react';

import {Container,Row, Navbar, Nav, Col, Tabs, Tab, Accordion,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';





import logo from '../src/Assets/logo.png';
import herotext from './Assets/hero-text.png';
import heromobile from './Assets/hero-head.png';
import gallery from './Assets/gallery-1.png';
import gallery_2 from './Assets/gallery-2.png';
import humburger from './Assets/white-humberger.svg';


import './Assets/style.css';

const options = {
  margin: 30,
  responsiveClass: true,

  dots: true,
  autoplay: true,
 
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 4,

      }
  },
};


 

function App() {
  const [key, setKey] = useState('home');

  return (
    <div className="App"> 
       
    
    <div className='hero'>
    <Navbar className="navbar" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="45*45"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"><img src={humburger} width="25" height="30"  alt="navbar-humberger"/></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#history" className="me-5 px-0 pb-0 mb-2">01. HISTORY</Nav.Link>
            <Nav.Link href="#team" className="px-0 pb-0 mb-2">02. TEAM</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Row >
      <Col>
           
      <img src={herotext} alt="hero-text" className='hero-text img-fluid' data-aos="fade-up"/>
     
      
      <img src={heromobile} alt="hero-mobile" className='hero-mobile img-fluid'/>
     

      </Col>
    </Row>
   
      
      </Container>
    </div>

<Container>
  <Row className="my-3 hero-footer" data-aos="fade-up">
    <Col md={6}>
    <div className='d-flex justify-content-center justify-content-md-start align-items-center'>
    <img src={logo} alt="logo" width="45" height="45" className='me-2'/>
    <div><h4 className='m-0 mt-2'>LOSANGELES</h4> <h4 className="mountains">MOUNTAINS</h4></div>
    </div>
    </Col>

    <Col md={6} className="d-flex justify-content-center justify-content-md-end align-items-center">
      <Nav>
            <Nav.Link href="#history" className=" me-md-5 me-3 px-0 pb-0 mb-2">01. HISTORY</Nav.Link>
            <Nav.Link href="#team" className=" me-md-5 ms-3 px-0 pb-0 mb-2">02. TEAM</Nav.Link>
      </Nav>
    </Col>
 </Row>
</Container>

{/* ------------------ History Section ----------------------------*/}

    <div className='history-hero p-0' id="history">
      <Container>
        <Row data-aos="fade-up">
         
            <div className='history-text'>
                <div className='d-flex '>
                  <h1 className='number'>01</h1>
                  <div className="headline"><h2 className='m-0'>HISTORY</h2> <div id="dot"></div></div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
           </div>
         
       
         
        </Row>
      </Container>

{/* -------------- Carousel section -----------------------*/ }
      <div className='history-hero-gallery'>
      <Container>
        
        <OwlCarousel className='owl-theme owl-class-name' {...options} data-aos="zoom-in">
          <div className="item">
            <img src={gallery} alt="113"/>
          </div>
          <div className="item">
            <img src={gallery_2} alt="113"/>
          </div>
          <div className="item">
            <img src={gallery} alt="113"/>
          </div>
          <div className="item">
            <img src={gallery_2} alt="113"/>
          </div>
          <div className="item">
            <img src={gallery} alt="113"/>
          </div>
          <div className="item me-2">
            <img src={gallery_2} alt="113"/>
          </div>
          <div className="item">
            <img src={gallery} alt="113"/>
          </div>
          <div className="item me-2">
            <img src={gallery_2} alt="113"/>
          </div>
          <div className="item me-2">
            <img src={gallery_2} alt="113"/>
          </div>

        </OwlCarousel>
   
      </Container>
   </div>
</div>


{/* ---------- Climb Section ------------------------------*/}

    <Container>
      <Row data-aos="fade-up">
        <Col md={3}>
          <div className="d-flex">
           <h1 className='number'>02</h1>
           <div className="headline"><h2 className='m-0'>CLIMB</h2><div id="dot"></div></div>
          </div>
        </Col>

        <Col md={9} className=" d-flex align-items-center">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </Col>
      </Row>
    </Container>

{/* -------------------- Mountain Schedule Section -----------------------*/}



    <div className='mountain-hero' id="team" >

  <div className="d-none d-md-block">


      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 myClass">
      <Tab eventKey="home" className="tab" title="MOUNTAIN 1">
       <Container>
        <Row> <Col md={7} lg={5}>
          <div className='card' data-aos="zoom-in">
            <h3>SCHEDULE </h3><p>MOUNTAIN 1</p>
           <div className='d-flex'>
            <div> <p className='mb-0'>25 Nov 2016</p> <p>28 Nov 2016</p> <p className='mb-4 mt-4'>18 Dec 2016</p> <p>7 Jan 2016</p></div>
            <div className='ms-5'><p className='mb-0'>Vestibulum viverra</p> <p>Vestibulum viverra</p> <p className='mb-4 mt-4'>Vestibulum viverra</p> <p>Vestibulum viverra</p></div>
           </div>
          </div>
         
           </Col></Row>
        </Container>
      </Tab>
      <Tab eventKey="profile"  title="MOUNTAIN 2">
      <Container>
        <Row> <Col md={7} lg={5}>
          <div className='card' data-aos="zoom-in" >
            <h3>SCHEDULE </h3><p>MOUNTAIN 2</p>
           <div className='d-flex'>
            <div> <p className='mb-0'>25 Nov 2016</p> <p>28 Nov 2016</p> <p className='mb-4 mt-4'>18 Dec 2016</p> <p>7 Jan 2016</p></div>
            <div className='ms-5'><p className='mb-0'>Vestibulum viverra</p> <p>Vestibulum viverra</p> <p className='mb-4 mt-4'>Vestibulum viverra</p> <p>Vestibulum viverra</p></div>
           </div>
          </div>
         
           </Col></Row>
        </Container>
      </Tab>
      
    </Tabs>
    </div>


    <Accordion defaultActiveKey="0" className='d-block d-md-none' data-aos="fade-up">
      <Accordion.Item className="accordion-header" eventKey="0">
        <Accordion.Header>MOUNTAIN 1</Accordion.Header>
        <Accordion.Body className="accordion-body bg-light">
        <div className='card'>
            <h3>SCHEDULE </h3><p>MOUNTAIN 1</p>
           <div className='d-flex'>
            <div> <p className='mb-0'>25 Nov 2016</p> <p>28 Nov 2016</p> <p className='mb-4 mt-4'>18 Dec 2016</p> <p>7 Jan 2016</p></div>
            <div className='ms-5'><p className='mb-0'>Vestibulum viverra</p> <p>Vestibulum viverra</p> <p className='mb-4 mt-4'>Vestibulum viverra</p> <p>Vestibulum viverra</p></div>
           </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>MOUNTAIN 2</Accordion.Header>
        <Accordion.Body className="accordion-body bg-light">
        <Container>
        <Row> <Col md={5}>
          <div className='card'>
            <h3>SCHEDULE </h3><p>MOUNTAIN 2</p>
           <div className='d-flex'>
            <div> <p className='mb-0'>25 Nov 2016</p> <p>28 Nov 2016</p> <p className='mb-4 mt-4'>18 Dec 2016</p> <p>7 Jan 2016</p></div>
            <div className='ms-5'><p className='mb-0'>Vestibulum viverra</p> <p>Vestibulum viverra</p> <p className='mb-4 mt-4'>Vestibulum viverra</p> <p>Vestibulum viverra</p></div>
           </div>
          </div>
         
           </Col></Row>
        </Container>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

   

    
    <div className="mountain-footer">
      <Container>
        <Row data-aos="fade-in" data-aos-offset="50">
          <Col md={4}>
          <div className=' d-flex mt-3 mb-3 justify-content-center justify-content-md-start align-items-center'>
    <img src={logo} alt="logo" width="45" height="45" className='me-2'/>
    <div><h4 className='m-0 mt-2'>LOSANGELES</h4> <h4 className="mountains">MOUNTAINS</h4></div>
    </div>
          </Col>
          <Col md={8} className="d-flex justify-content-center justify-content-md-end align-items-center mb-3 mb-md-0">
            <p>COPYRIGHTS 2016. ALL RIGHTS RESERVED</p>
          </Col>
        </Row>
      </Container>
    </div>


    </div>







    </div>
 

  );
}

export default App;
