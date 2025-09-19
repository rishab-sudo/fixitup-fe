import React, { Fragment } from "react";
import Header from "../../Components/Header/Navbar";
import HomeBanner from "../../Components/HomeBanner/HomeBanner"
import Footer from "../../Components/Footer/Footer";
import About from "../About/About"
import Product from "../Product/Product";
import Quote from "../Quote/Quote";
import Client from "../Client/Clients";

const Home = () => {
  return (
    <>
      <Header />
      <HomeBanner/>
      <About />
      <Product/>
      <Quote />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
