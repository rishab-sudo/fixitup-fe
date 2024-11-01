import React from 'react'
import { Container } from "react-bootstrap";
import homebg from "../../assets/homebg.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./HomeTop.css"

const HomeTop = () => {
  return (
    <Container fluid className='g-0' id="home">
    <Container
    fluid
     className="banner_fluid"
    style={{
      backgroundImage: `url(${homebg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "cover",
      backgroundSize: "100% 100% ",
      padding: "10% 5%",
      position: "relative",
      marginTop:"85px"
    }}
    >
    <div>
      <img className="fly1" src={require("../../assets/fly.gif")} alt="" />
    </div>
    <div>
      <img className="Banner_kit" src="Images/bannerKit.png" alt="" />
    </div>
    <div className="banner_text_div">
      <p
        className="page_text"
        style={{ color: "#FF688B", fontWeight: "600" }}
      >
        Essentials Reimagined:
      </p>
      <p className="banner_heading" style={{ fontFamily: "Satisfy" }}>
        One essential kit for
        <br />
        every day for every woman
      </p>
      <div className="mt-3">
        <ScrollLink
          to="product_container"
          smooth={true}
          duration={100}
          style={{ cursor: "pointer" }}
        >
          <button className="Banner_button">Shop Now</button>
        </ScrollLink>{" "}
      </div>
    </div>
    
    <div
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
      }}
    >
      <img className="fly" src={require("../../assets/fly.gif")} alt="" />
    </div>
    </Container>
    </Container>
  )
}

export default HomeTop