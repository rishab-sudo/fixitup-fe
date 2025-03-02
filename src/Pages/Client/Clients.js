import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Clients.css";

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container fluid className="client_fluid">
      <Container className="client_container">
        <div className="clinet_heading_wrapper">
          <p className="page_heading">
            <span style={{ color: "black" }}> what</span> OUR CLIENTS{" "}
          </p>
          <p
            className="page_heading"
            style={{ marginTop: "-15px", color: "black" }}
          >
            ARE SAYING
          </p>
        </div>
        <Slider {...settings} className="slider">
          <div className="review_main_div">
            <div className="flex_div">
              <img className="line" src="Images/line.png" alt="" />
              <p className="review_text">
              We were leaving from the office and my boss invited us for party and I had completely forgotten to shave my legs .. Thankgod I had fixitupkit which had razor to save my life !!!
              </p>
            </div>
            <div className="flex_div img_name_div">
              <img src="Images/c2.png" alt=""  className="c_img"/>
              <p style={{ fontWeight: 600 }}>Swati gahunia</p>
            </div>
          </div>

          <div className="review_main_div">
            <div className="flex_div">
              <img src="Images/line.png" alt="" />
              <p className="review_text">
              I knew my wife was travelling on a girls trip .. just to make her travel hassle free .. I had to put this in her bag.. great product..!
              </p>
              <br />
              <br />
            </div>
            <div className="flex_div img_name_div">
              <img src="Images/c1.png"  className="c_img" />
              <p style={{ fontWeight: 600 }}>Kailash Bairi</p>
            </div>
          </div>

          <div className="review_main_div">
            <div className="flex_div">
              <img src="Images/line.png" alt="" />
              <p className="review_text">
             So a day before my wedding around 1 am i had a dental emergency ! Could not go to the doc that late, but the fix it up kit had my back. Legit saved me that day !! Thank you @prityy_11 for making this wonderful kit, highly recommend it to all @ladies out there !!  
              </p>
            <br />
            </div>
            <div className="flex_div img_name_div">
              <img src="Images/c2.png" className="c_img"/>
              <p style={{ fontWeight: 600 }}>Cherryspvtlife</p>
            </div>
          </div>
        </Slider>
      </Container>
    </Container>
  );
}

export default Clients;
