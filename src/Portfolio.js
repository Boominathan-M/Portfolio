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
                                <img src={Form1} alt="form1" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form2} alt="form2" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form3} alt="form3" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Form4} alt="form4" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Form Validation</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">

                        <p className="deve">Develop a form validation system platform using HTML, CSS, and JavaScript . The system should include :</p>
                        <p className="tit"><span className="subtit">User Authentication :</span> Implement functionality to ensure proper user authentication.</p>
                        <p className="tit"><span className="subtit">Form Interface Design :</span> Design a user-friendly and visually appealing form interface.</p>
                        <p className="tit"><span className="subtit">Registration Form :</span> Create a registration form to capture user information.</p>
                        <p className="tit"><span className="subtit">Preview Page :</span> Include a preview page where users can review the information they have entered before final submission.</p>

                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Online1} alt="online1" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Online Examination</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online2} alt="online2" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Online Examination</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online3} alt="online3" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Online Examination</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Online4} alt="online4" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Online Examination</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">

                        <p className="deve">Develop an online examination preparation platform using HTML, CSS, and JavaScript . The platform should include :</p>
                        <p className="tit"><span className="subtit">Login Page :</span> A login page where users can sign in to access the examination.</p>
                        <p className="tit"><span className="subtit">Question Selection :</span> A page where users can select and answer questions.</p>
                        <p className="tit"><span className="subtit">Immediate Result :</span> A results page that displays the user's score immediately after submitting their answers.</p>

                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Clock1} alt="clock1" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Clock2} alt="clock2" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Clock3} alt="clock3" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Digital Clock</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">

                        <p className="deve">Develop a digital clock using HTML, CSS, and JavaScript that displays the current time, including hours, minutes, and seconds and updates dynamically every second.</p>

                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={loginpage} alt="loginpage" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Login Form</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">

                        <p className="deve">Develop a static login webpage with the following features :</p>
                        <p className="tit"><span className="subtit">Structure and Layout :</span> The structure and layout of the webpage are created using HTML, CSS, and React JS.</p>
                        <p className="tit"><span className="subtit">Structure and Layout :</span> The structure and layout of the webpage are created using HTML, CSS, and React JS.</p>
                        <p className="tit"><span className="subtit">Colorful Design :</span> The design of the webpage is vibrant and colorful.</p>
                        <p className="tit"><span className="subtit">Signup Form :</span> The signup form includes a variety of fields for user information, including name, email, password, and a checkbox.</p>

                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <Carousel>
                            <Carousel.Item>
                                <img src={Priceingtable} alt="priceingtable0" />
                                <Carousel.Caption>
                                    <h3 className="formtit">Subscribtion Form</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-lg-6 animate__animated animate__fadeInRight">

                        <p className="deve">Develop a static subscribtion form HTML, CSS, and React JS to implement these components :</p>
                        <p className="tit"><span className="subtit">Container Element :</span> A container element that holds the entire pricing table.</p>
                        <p className="tit"><span className="subtit">Plan Components :</span> Three separate plan components, each representing a different plan.</p>
                        <p className="tit"><span className="subtit">List of Features :</span> Each plan should include a list of features, displayed in an unordered list.</p>

                    </div>
                </div>
            </div>
        </>
    }
}
export default Portfolio;