import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <>
    <Container fluid className="about_content_container" id="about">
        <div className="about_text_wrapper">
          <p className="page_heading" style={{ fontFamily: "Satisfy" }}>
            About us
          </p>
          <p className="page_text">
            Discover Fix It Up, ! With 17 innovations, we redefine your daily
            effort. Stay stylish, embrace joy, and nurture the environment
            simultaneously. Effortlessly elevate your appearance and well-being.
            Fix It Up is where sustainability meets delight, ensuring you look
            good, feel great, and contribute to a greener world all in one
            remarkable experience
          </p>
        </div>
        <div className="aboutUs_img">
          <img
            src={require("../../assets/about2.png")}
            alt="aboutImg"
            className="about_image"
          />
        </div>
        <div className="about_fly_div">
          <img className="about_fly" src="Images/aboutFly.gif" alt="" />
        </div>
      </Container>
      <Container fluid className="about_content_container" style={{margin:"0px",background:""}}>
      <div className="aboutUs_img2">
          <img
            src={require("../../assets/founder2.png")}
            alt="aboutImg"
            className="about_image2"
          />
        </div>
        <div className="about_fly_div">
          <img className="about_fly" src="Images/aboutFly.gif" alt="" />
        </div>

        <div className="about_text_wrapper">
          <p className="page_heading" style={{ fontFamily: "Satisfy" }}>
           Founder
          </p>
          <p className="page_text">
          Meet <span style={{fontWeight:"600"}}>Dr. Prity Mhatre,</span> a hardworking person who supports women's health. Fix it Up comes from her troubles, providing useful answers for any woman's last-minute problems. As a doctor and everyday lady, she knows how important it is to have stress-free solutions. This is something she made for you, and it came from her.
           Dr. Prity Mhatre does more than lead Fix it Up, she also runs a women's group. This shows her dedication to helping others grow strong. Accept ease and strength, picked by Dr Prity Mhatre for women like you.
          </p>
        </div>
       
      </Container>
    </>
  );
};

export default About;
