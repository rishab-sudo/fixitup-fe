import React from "react";
import { Container } from "react-bootstrap";
import Form from "../../Components/Form/Form";
import "./Quote.css";

const Quote = () => {
  return (
    <div style={{ position: "relative" }}>
      <Container fluid className="quote_fluid" id="contact">
        <Container className="quote_container">
          <div className="form_main_wrapper">
            <Form />
          </div>

          <div className="benefits_text_wrapper">
            <p className="benefits_heading" style={{ fontFamily: "Satisfy" }}>
              Benefits of kit
            </p>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Streamlines Daily Routines With Carefully Curated Essentials.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Saves Time And Effort With A One-Stop Solution For Various
                Needs.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Designed For Portability, Making It Easy To Carry In Purses Or
                Bags
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Offers A Cost-Effective Approach By Bundling Essential Items
                Together.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Saves Money Compared To Purchasing Individual Products
                Separately.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Includes High-Quality Products That Are Durable For Daily Use.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Facilitates Organization By Providing A Centralized Kit For
                Daily Essentials.
              </p>
            </div>
            <div className="points_flex_div">
              <img src={require("../../assets/tick1.png")} alt="" />
              <p>
                Ensures Easy Access To Necessary Items For A Hassle-Free Day
              </p>
            </div>
          </div>
        </Container>
      </Container>
      <div>
        <img src="Images/fly2.gif" alt="fly2" className="fly2_form" />
      </div>
      <div>
        <img
          src="Images/backBanner.png"
          alt="backBanner"
          className="backBanner"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Quote;
