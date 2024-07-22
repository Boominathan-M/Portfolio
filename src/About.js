import React, { Component } from "react";
import Personalimg from './mygrad.jpg';
import Countup from 'react-countup';
       
class About extends Component {
    render() {
        
        return <>
            <div className="container">
            <div className="head col-lg-12 text-center animate__animated animate__fadeInDown">Who Am I</div>
            <h1 className="abopersonal animate__animated animate__fadeInLeft">Personal Info</h1>
                <div className="row">
                    <div className="col-lg-4 animate__animated animate__fadeInLeft">
                        <div className="color">
                            <h3 className="info"><label className="yclr">Name:</label> Boominathan M</h3>
                            <h3 className="info"><label className="yclr">Age:</label> 23</h3>
                            <h3 className="info"><label className="yclr">D.O.B:</label> 18.03.2001</h3>
                            <h3 className="info"><label className="yclr">Degree:</label> BE</h3>
                            <h3 className="info"><label className="yclr">Language:</label> Tamil , English</h3>
                        </div>    
                    </div>
                    <div className="col-lg-4 animate__animated animate__fadeInLeft">
                        <div className="color">
                            <h3 className="info"><label className="yclr">E-mail:</label> boominathan454545@gmail.com</h3>
                            <h3 className="info"><label className="yclr">Phone:</label> +91-6379171055</h3>
                            <h3 className="info"><label className="yclr">City:</label> Dindigul</h3>
                            <h3 className="info"><label className="yclr">State:</label> Tamilnadu</h3>
                            <h3 className="info"><label className="yclr">Nationality:</label> Indian</h3>
                        </div>
                    </div>  
                    <div className="col-lg-4 text-center animate__animated animate__fadeInRight">
                        <img className="perimg img-fluid" src={Personalimg} alt="personal Image 2"/>
                    </div>

            <h1 className="personal animate__animated animate__fadeInLeft">My Skills</h1>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={85} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="rgb(153, 255, 0)" />
                                </linearGradient>
                            </defs>
                            <circle className="circle1" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings1">C-Programm</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={90} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle2" cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings2">HTML 5</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={80} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle3"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings3">CSS</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={70} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle4"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings4">Bootstrap</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={75} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle5"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings5">JavaScript</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={75} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle6"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings6">React JS</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={60} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle7"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings7">Node JS</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={60} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle8"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings8">Mysql</h1>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-4 col-6">
                        <div className="skilloutcir">
                            <div className="skillinncir">
                                <div className="skillnum">
                                    <Countup start={0} end={60} duration={3} delay={0}/>%
                                </div>
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                            <defs>
                                <linearGradient id="GradientColor">
                                    <stop offset="0%" stopColor="rgb(255, 255, 0)" />
                                    <stop offset="100%" stopColor="skyblue" />
                                </linearGradient>
                            </defs>
                            <circle className="circle9"  cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                        <div>
                            <h1 className="skillheadings9">Mongo</h1>
                        </div>
                    </div>

            <h1 className="personal animate__animated animate__fadeInLeft">Educational Qualification</h1>

                    <div className="col-lg-6 animate__animated animate__fadeInLeft">
                        <div className="timeline">
                            <div className="timeline-event">
                                <div className="timeline-date">2024</div>
                                    <div className="timeline-content">
                                        <div className="text">
                                            <div className="edcolor">
                                                <label>Fullstack Developer</label>
                                            </div>
                                            <div>
                                                <label>Xplocode Infotech Private Limitted.</label>
                                            </div>
                                            <div>
                                                <label>2024(6-Months).</label>
                                            </div>
                                            <div>
                                                <label>Madurai,Tamilnadu.</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="timeline-event">
                                <div className="timeline-date">2022</div>
                                    <div className="timeline-content">
                                        <div className="text">
                                            <div className="edcolor">
                                                <label>B.E-Mechanical Engineering</label>
                                            </div>
                                            <div>
                                                <label>PSNA College Of Engineering And Technology.</label>
                                            </div>
                                            <div>
                                                <label>2018-2022.</label>
                                            </div>
                                            <div>
                                                <label>Dindigul,Tamilnadu.</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 animate__animated animate__fadeInRight">
                        <div className="timeline">
                            <div className="timeline-event">
                                <div className="timeline-date">2018</div>
                                    <div className="timeline-content">
                                        <div className="text">
                                            <div className="edcolor">
                                                <label>H.S.C</label>
                                            </div>
                                            <div>
                                                <label>Vidya Sikshaa Matric Higher Secondary School.</label>
                                            </div>
                                            <div>
                                                <label>2017-2018.</label>
                                            </div>
                                            <div>
                                                <label>Dindigul,Tamilnadu.</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="timeline-event">
                                <div className="timeline-date">2016</div>
                                    <div className="timeline-content">
                                        <div className="text">
                                            <div className="edcolor">
                                                <label>S.S.L.C</label>
                                            </div>
                                            <div>
                                                <label>Cheran Vidhyalaya Matric Higher Secondary School.</label>
                                            </div>
                                            <div>
                                                <label>2015-2016.</label>
                                            </div>
                                            <div>
                                                <label>Dindigul,Tamilnadu.</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    }
}
export default About;