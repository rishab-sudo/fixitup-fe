import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import "./Product.css";
import kitImg from "../../assets/kit.png";
import kit2Img from "../../assets/kit22.jpg";
import allKitImg from "../../assets/allProducts.png";
import allKitImg2 from "../../assets/allProducts2.png";

// Product Data
const products = [
  {
    id: 1,
    name: "Women Essential Kit",
    price: 349,
    image: kitImg,
    bannerimg: allKitImg,
  },
  {
    id: 2,
    name: "Ladies Special Kit",
    price: 99,
    image: kit2Img,
     bannerimg: allKitImg2,

  },
];

const Product = () => {
  console.log(products);
  
  const dispatch = useDispatch();
  
  const [quantities, setQuantities] = useState({
    1: 1, 
    2: 1,
    });

  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Ensure quantity doesn't go below 1
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, count: quantities[product.id] }));
  };

  return (
    <div style={{ position: "relative" }} id="products">
      <Container
        fluid
        className="g-0"
        style={{
          background: "#F7F6F6",
          margin: 0,
          padding: 0,
        }}
        id="product"
      >
        {/* Product Display */}
        {products.map((product) => (
          <>
          <div key={product.id} className="product_container">
            <div className="product_text_wrapper">
              <h1 className="product_heading" style={{ fontFamily: "Satisfy" }}>
                {product.name}
              </h1>
              <p className="regular_price">Regular Price</p>
              <p className="product_price" style={{ fontFamily: "Poppins" }}>
                ₹ {product.price}.00
              </p>

              <div className="counter_container">
                <button
                  className="counter_button"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="counter">{quantities[product.id]}</span>
                <button
                  className="counter_button"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>

              <button
                className="addtocart_button"
                onClick={() => handleAddToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
            <div className="kit_image_div">
              
              <img src={product.image} alt={product.name} className="kit_image" />
            </div>
          </div>

<div style={{ backgroundColor: "white",}}>
          <img
            // src="Images/allProducts.png"
             src={product.bannerimg}
            alt=""
            className="allProduct_Img "
           />
        </div>
        </>
        ))}
        
      </Container>
    </div>
  );
};

export default Product;
