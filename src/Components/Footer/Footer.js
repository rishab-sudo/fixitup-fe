import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaFacebookSquare } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ email: '' });
  const [errors, setErrors] = useState({ email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation logic for the email field (you can modify this to suit your requirements)
    if (name === 'email') {
      if (!value) {
        setErrors({
          ...errors,
          email: 'Email is required',
        });
      } else if (!isValidEmail(value)) {
        setErrors({
          ...errors,
          email: 'Invalid email format',
        });
      } else {
        setErrors({
          ...errors,
          email: '',
        });
      }
    }
  };
  const handleButtonClick = () => {
 
  setFormData({ email: '' });
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };  

  return (
    <>
      <Container
        fluid
        className="footer_containerFluid  d-none d-lg-block"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Container className="footer_container">
          <div className="footer_wrapper1 footer_text">
            <a href="#aboutus">
              <img className="footer_logo" src={require ("../../assets/logo.png")} alt="" />
            </a>

            <div
              className="d-flex justify-content-start align-items-center"
              style={{ gap: "2rem", marginTop: "1rem", fontSize: "20px" }}
            >
              <a className="footer_links"  href="https://www.facebook.com/profile.php?id=100075697787838&mibextid=ZbWKwL">
                <FaFacebookSquare />
              </a>
              <a className="footer_links"  href="https://www.instagram.com/p/C2NDskfyM0S/?igsh=ZGVoazI5MmNkNjJo">
                {" "}
                <GrInstagram />
              </a>
              <a className="footer_links" href="https://wa.me/8878091011" target="_blank">
                {" "}
                <SiWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer_text">
            <p className="link_title">Quick Links</p>
            <a className="footer_links" href="#aboutus">
              <p>About Us</p>
            </a>
          </div>

          <div className="footer_text">
            <p className="link_title">Company</p>
            <a className="footer_links" href="#product">
              <p>Our Product</p>
            </a>
          </div>

          <div className="footer_text">
            <p className="link_title">Support</p>
            <a className="footer_links" href="#contact">
              {" "}
              <p>Contact Us</p>
            </a>
          </div>

          <div className="footer_text footer_wrapper3">
            <p className="link_title">Newsletter</p>
            <p>Subscribe our newsletter and get exciting offers </p>
             <div className="footer_errorbox">
  <div className="footer_field_group">
  <input
        required
        type="email"
        name="email"
        className="footer_form_fields"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="footer_form_labels" htmlFor="fnameInput">
        Email
      </label>
      <img src={require("../../assets/arrow.png")}onClick={handleButtonClick} className="custom-button" />
    </div>

  <div style={{marginLeft:"5px"}}>{errors.email && <p className="error">{errors.email}</p>}</div>
</div>
          </div>
        </Container>
        <div>
          <p>
            © 2024-25 All Rights Reserved by Fixitup design & develop by{" "}
            <span style={{ color: "#FF688B", fontWeight: "bold" }}>
              <a
                href="https://www.reclamehub.in/"
                target="_blank"
                style={{
                  color: "#FF688B",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Reclame hub
              </a>
            </span>
          </p>
        </div>
      </Container>

      <Container
        fluid
        className="footer_containerFluid  d-block d-lg-none"
        style={{ backgroundColor: "" }}
      >
        <Container className="footer_sm_container">
          <div className="footer_sm_wrapper1 footer_text">
            <a href="#home">
              <img className="footer_logo" src={require ("../../assets/logo.png")} alt="" />
            </a>
          </div>

          <div className="footer_sm_wrapper2">
            <div className="footer_text">
              <p className="link_title">Quick Links</p>
              <a className="footer_links" href="#aboutus">
                <p>About Us</p>
              </a>
            </div>

            <div className="footer_text">
              <p className="link_title">Company</p>
              <a className="footer_links" href="#product">
                <p>Our Product</p>
              </a>
            </div>

            <div className="footer_text">
              <p className="link_title">Support</p>
              <a className="footer_links" href="#contact">
                {" "}
                <p>Contact Us</p>
              </a>
            </div>
          </div>

          <div className=" footer_sm_wrapper3 footer_text">
            <p className="link_title">Newsletter</p>
            <p>Subscribe our newsletter and get exciting offers </p>
            <div className="footer_errorbox">
  <div className="footer_field_group">
  <input
        required
        type="email"
        name="email"
        className="footer_form_fields"
        value={formData.email}
        onChange={handleChange}
      />
      <label className="footer_form_labels" htmlFor="fnameInput">
        Email
      </label>
    <img src={require("../../assets/arrow.png")}onClick={handleButtonClick} className="custom-button" />
    </div>

  <div style={{marginLeft:"5px"}}>{errors.email && <p className="error">{errors.email}</p>}</div>
</div>
          </div>

          <div
            className="d-flex justify-content-start align-items-center mb-2"
            style={{ gap: "2rem", marginTop: "1rem", fontSize: "20px" }}
          >
            <a className="footer_links" href="https://www.facebook.com/profile.php?id=100075697787838&mibextid=ZbWKwL">
              <FaFacebookSquare />
            </a>
            <a className="footer_links" href="https://www.instagram.com/p/C2NDskfyM0S/?igsh=ZGVoazI5MmNkNjJo">
              <GrInstagram />
            </a>
            <a className="footer_links" href="https://wa.me/8878091011" target="_blank" >
              <SiWhatsapp />
            </a>
          </div>
        </Container>
        <div>
          <p>
            © 2024-25 All Rights Reserved by Fixitup design & develop by{" "}
            <span style={{ color: "#FF688B", fontWeight: "bold" }}>
              <a
              href="https://wa.me/8527352284"
                target="_blank"
                style={{
                  color: "#FF688B",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Reclame hub
              </a>
            </span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default Footer;
