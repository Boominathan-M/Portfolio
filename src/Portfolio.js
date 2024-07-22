import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Form1 from './formpage1.png';
import Form2 from './formerrormsg.png';
import Form3 from './formvalidationpreview.png';
import Form4 from './formvalidationfinalpage.png';
import Online1 from './onlineexam1page.png';
import Online2 from './onlinepage2.png';
import Online3 from './onlinepage3page.png';
import Online4 from './onlineexam4page.png';
import Clock1 from './jsclock1page.png';
import Clock2 from './jsclock2page.png';
import Clock3 from './jsclock3page.png';
import loginpage from './login page.png';
import Priceingtable from './priceingtable.png';
class Portfolio extends Component {

    render() {
        return <>
            <div className="container">
                <div className="head col-lg-12 text-center animate__animated animate__fadeInDown">My Portfolio</div>
                <div className="row project">
                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Form1} alt="form1"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation Using JS</h3>
                                    <p className="formcon">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form2} alt="form2"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                    <p className="formcon">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form3} alt="form3"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                    <p className="formcon">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form4} alt="form4"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                    <p className="formcon">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div className="col-lg-6 animate__animated animate__fadeInRight">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Online1} alt="online1"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Quiz Time</h3>
                                    <p className="formcon">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online2} alt="online2"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Quiz Time</h3>
                                    <p className="formcon">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online3} alt="online3"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Quiz Time</h3>
                                    <p className="formcon">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online4} alt="online4"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Quiz Time</h3>
                                    <p className="formcon">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Clock1} alt="clock1"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                    <p className="formcon">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Clock2} alt="clock2"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                    <p className="formcon">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Clock3} alt="clock3"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                    <p className="formcon">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">
                        <Carousel>
                            <Carousel.Item>
                                <img src={loginpage} alt="loginpage"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Sign Up Form</h3>
                                    <p className="formcon">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Priceingtable} alt="priceingtable0"/>
                                <Carousel.Caption>
                                    <h3 className="formtit">Priceingtable</h3>
                                    <p className="formcon">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Portfolio;