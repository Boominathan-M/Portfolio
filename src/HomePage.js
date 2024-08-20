import React, { Component } from "react";
import {Routes,Route,Link,NavLink} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo1.png';
class HomePage extends Component{
    render(){
        let myStyle=({isActive})=>{
        return{
            "color":isActive?'rgb(153, 255, 0)':'white',
            "marginLeft": "4em",
            "textDecoration": "none",
            "fontSize": "20px",
            "fontWeight": "bold"
        }
      }
        return<>
            <Navbar expand="lg" sticky="top" className="navbg">
              <div className="container">
                <Navbar.Brand as={Link} to="/" className="portfolio" src={Logo} alt="logo">Portfolio.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="justify-content-end flex-grow-1 pe-3">
                      <NavLink style={myStyle}  to="/" >Home</NavLink>
                      <NavLink style={myStyle}  to="about" >About Us</NavLink>
                      <NavLink style={myStyle}  to="portfolio" >Portfolio</NavLink>
                      <NavLink style={myStyle}  to="contact" >Contact Us</NavLink>
                </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="about" element={<About/>} />
                <Route path="portfolio" element={<Portfolio/>} />
                <Route path="contact" element={<Contact/>} />
            </Routes>
        </>
    }
}
export default HomePage;