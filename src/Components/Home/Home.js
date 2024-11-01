import React, { Fragment } from "react";
import Header from "../Header/Navbar";
import HomeTop from "./HomeTop"
import About from "../About/About";
import Product from "../Product/Product";
import Quote from "../Quote/Quote";
import Client from "../Client/Clients";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HomeTop/>
      <About />
      <Product/>
      <Quote />
      <Client />
      <Footer />
    </>
  );
};

export default Home;
