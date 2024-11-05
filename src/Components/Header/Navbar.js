import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart);
  let c = 0;
  cartCount.map((item) => {
    c += item.count;
  });
  console.log(c);

  return (
<>
<Container fluid className="lg_nav_fluid d-none d-lg-block">
  <Container fluid className="nav_content_container">
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a  href="#Home">
      <img className="navbar-brand " src={ require("../../assets/logo.png")} alt=""/>
    </a>
    <div className="collapse navbar-collapse nav_link_div" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="nav-link" href="#home">Home</a>
      <a className="nav-link" href="#about">About</a>
        <a className="nav-link" href="#products">Products</a>
        <a className="nav-link" href="#contact">Contact</a>
  </div>
    </div>
  </div>

  <div className="d-flex justify-content-between">
  <Link to="/Cart">
    <div className="position-relative">
    <BsCart4 alt="cart" className="Navbar_cart" />
      {c > 0 && <p className="cart-count">{c}</p>}
    </div>
  </Link>
</div>

</nav>
  </Container>
</Container>

<Container fluid className="sm_nav_fluid d-lg-none d-md-none d-sm-block">
    <nav className="sm_navbar_div">
 <div>
    <a  href="#Home">
      <img className="sm_navbar-brand " src={ require("../../assets/logo.png")} alt=""/>
    </a>
    </div>

   <div className=" sm_nav_link_div">
        <a className="nav-link" href="#products">Products</a>
        <a className="nav-link" href="#contact">Contact</a>
    </div>
 

  <div className="d-flex justify-content-between">
  <Link to="/Cart">
    <div className="position-relative">
    <BsCart4 alt="cart" className="Navbar_cart" />
      {c > 0 && <p className="cart-count">{c}</p>}
    </div>
  </Link>
</div>
</nav>
  </Container>
    </>
  );
};

export default Navbar;
