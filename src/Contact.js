import React, { Component } from "react";
import emailjs from 'emailjs-com';
import Address from './address.png';
import Phone from './phone.png.png';
import Email from './email.png';
import Whatsapp from './whatsapp.png';
import Insta from './insta.png';
import Facebook from './facebook.png';
import Linkedin from './linkedin.png';
import Indeed from './indeed.png';
class Contact extends Component {
    constructor(){
        super();
        this.state={
            "fname":"",
            "lname":"",
            "email":"",
            "phno":"",
            "message":""
        }
    }
    getdata=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    clearstate=()=>{
        this.setState({
            "fname":"",
            "lname":"",
            "email":"",
            "phno":"",
            "message":""
        })
    }
    sendemail=(event)=>{
        if(this.state.fname =="" && this.state.lname == "" && this.state.email =="" && this.state.phno == "" && this.state.message == ""){
            alert("Please fill all the Fields.");
            return false;
        }

        event.preventDefault();

        emailjs.sendForm('service_jriinsd','template_o06oh94',event.target,'A60HXugX_KFy0UUSH')
            .then((response)=>{
                console.log("E-mail sent Successfully!",response)
                this.clearstate()
            })
            .catch((error)=>{
                console.log("E-mail not Sent!",error)
            })

            alert("E-mail sent Successfully!");
    }
    render() {
        return <>
            <div className="container">
            <div className="head col-lg-12 text-center animate__animated animate__fadeInDown">Catch Me On</div>
                <div className="row">
                <div className="col-lg-5 animate__animated animate__fadeInLeft">
                    <h1 className="get">Get In Touch</h1>
                    <label className="i">Challenges build me and it's fun when I deal with it ... With open arms ,  round the clock I am here to help you out ... Will be on time , ingenious , incredible and flawless . Just catch me up . </label>
                        <form name="formname" onSubmit={this.sendemail}>
                            <div>
                                <input className="input1" autoFocus name="fname" type="text" placeholder=" First Name" value={this.state.fname} onChange={this.getdata}/>
                            </div>
                            <div>    
                                <input className="input2" name="lname" type="text" placeholder=" Last Name" value={this.state.lname} onChange={this.getdata}/>
                            </div>
                            <div>
                                <input className="input3" name="email" type="email" placeholder=" E-Mail ID" value={this.state.email} onChange={this.getdata}/>
                            </div>
                            <div>    
                                <input className="input3" name="phno" type="text" placeholder=" Phone Number" value={this.state.phno} onChange={this.getdata}/>
                            </div>
                            <div>
                                <textarea className="input4" name="message" type="text" placeholder=" Leave as a Message..." value={this.state.message} onChange={this.getdata}></textarea>
                            </div>
                            <div>
                                <button type="submit" className="btnS">Submit</button>
                            </div>
                        </form>
                    </div> 
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 text-center animate__animated animate__fadeInRight">
                        <img className="addimg" src={Address} alt="Address ICON"/>
                        <label className="peradd">1/177 B , J.K Nagar Madurai Main Road , Sembatti , Pachamalayankottai-(Post) , Nilakottai-(Taluk) ,</label>
                        <label className="peradd"> Dindigul-(District) . Pin:624707.</label>
                        <div>
                            <img className="conimg" src={Phone} alt="Phone ICON"/>
                        </div>
                        <div>
                            <label className="percon">Contact Number 1: +91-6379171055</label>
                        </div>
                        <div>
                            <label className="percon">Contact Number 2: +91-9786339810</label>
                        </div>
                        <div>
                            <label className="percon">Telephone Number : +0451-2552217</label>
                        </div>
                        <div>
                            <img className="maiimg" src={Email} alt="Email ICON"/>
                        </div>
                        <div>
                            <label className="permail">boominathan454545@gmail.com</label>
                        </div>
                        <div>
                            <label className="permail">boominathan454545@psnacet.com</label>
                        </div>
                            <label className="ucan">You can also find me on...</label>
                        <div>
                            <img className="whatsimg" src={Whatsapp} alt="Whatsapp ICON"/>
                            <img className="insimg" src={Insta} alt="Instagram ICON"/>
                            <img className="faceimg" src={Facebook} alt="Facebook ICON"/>
                            <img className="indimg" src={Indeed} alt="Indeed ICON"/>
                            <img className="linkimg" src={Linkedin} alt="Linkedin ICON"/>
                        </div>
                    </div>
                    <div className="col-lg-12 text-center animate__animated animate__fadeInUp">
                        <div>
                            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7851.453388373546!2d77.864483679202!3d10.283591188449734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075398719a8b77%3A0x8382494f13e21c86!2sJK%20Complex!5e0!3m2!1sen!2sin!4v1717502865517!5m2!1sen!2sin" width="100%" height="200px" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>  
                    </div>
                </div>
            </div>
        </>
    }
}
export default Contact;