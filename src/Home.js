import React, { Component } from "react";
import Resume from './Boominathan_CV.pdf';
import Profileimg from './profimg1.png';
import {Typewriter,Cursor} from "react-simple-typewriter";

class Home extends Component {
    render() {
        return <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="color animate__animated animate__fadeInLeft">
                            <p className="hello">Hello,It's Me</p>
                            <div>
                                <h1 className="name">Boominathan M</h1>
                            </div>
                            <div>
                                <label className="deve">And I'm a <span className="full"><Typewriter words={["Full Stack Developer","MERN Stack Developer"]}
                                loop
                                typespeed={100}
                                deletespeed={80}
                                delayspeed={1000}/><Cursor cursorStyle=" !"/></span></label>
                            </div>
                            <p className="exp">High level experience in producing quality work on Web Designing and Developement.</p>
                            <a href={Resume} target="_blank">
                                <button type="button" className="button">View CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-center order-1 order-lg-2 animate__animated animate__fadeInRight">
                        <img className="proimg img-fluid" src={Profileimg} alt="personal Image 1"/>
                    </div>
                </div>
            </div>
        </>
    }
}
export default Home;