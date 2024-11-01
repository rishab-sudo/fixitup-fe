import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import homebg from "../../assets/homebg.png";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/CartSlice";
import "./Style.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart); // Get all cart items
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id })); // Remove specific item by id
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id })); // Increase quantity for the specific item
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id })); // Decrease quantity for the specific item
  };

  const handleClick = () => {
    if (cartItems.length > 0) { // Check if cart has items
      navigate("/payment");
    }
  };

  return (
    <div
    className="cart_main_div"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        backgroundSize: "100% 100% ",
        position: "relative",
        paddingBottom:"20px"
      }}
    >
      <MDBContainer className="h-100h">
        <MDBRow className="justify-content-center align-items-center ">
          <MDBCol>
            <div className="text-center mt-4 mb-4 cart_heading">
              <h>Your Cart</h>
              <img
                className="giff"
                src={require("../../assets/cart.gif")}
                alt=""
              />
            </div>

            {cartItems.length === 0 ? (
              <h5 className="text-center">Your cart is empty !</h5>
            ) : (
              cartItems.map((item) => (
                <MDBCard className="cart-card shadow mb-3" key={item.id}>
                  <MDBCardBody>
                    <div className="d-md-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <MDBCardImage
                            src={item.image}
                            fluid
                            className="product-image"
                            alt={item.name}
                          />
                          <h4 tag="h5" className="kit_text mt-3">
                            {item.name}
                          </h4>
                        </div>

                        <div className="product-details">
                          <h4 tag="h5">
                            <small className="price">
                              Price: ₹{item.price}.00
                            </small>
                            <div className="d-flex flex-row align-items-center quantity-buttons mt-3">
                              <div>
                                <div tag="h5">
                                  <span className="quantity_text">Quantity: </span>
                                  <button
                                    size="sm"
                                    onClick={() =>
                                      handleDecreaseQuantity(item.id)
                                    }
                                    className="quantity-button"
                                  >
                                    -
                                  </button>{" "}
                                  <span style={{ fontSize: "0.8em" }}>
                                    {item.count}
                                  </span>{" "}
                                  <button
                                    size="sm"
                                    onClick={() =>
                                      handleIncreaseQuantity(item.id)
                                    }
                                    className="quantity-button"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="d-grid mt-2">
                              <button
                                onClick={() => handleRemoveFromCart(item.id)}
                                className="remove-button btn btn-danger"
                              >
                                Remove
                              </button>
                            </div>
                          </h4>
                        </div>
                      </div>
                      <div className="subtotal mt-2.5">
                        Subtotal:  ₹{item.price * item.count}
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              ))
            )}

            <MDBCard className="mt-4 shadow cart-card">
              <MDBCardBody>
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="text-dark">Payment Method: COD Only</h5>
                </div>

                <div className="text-center">
                  <button
                    className="address_btn btn btn-primary"
                    onClick={handleClick}
                    disabled={cartItems.length === 0} // Disable if cart is empty
                  >
                    Continue
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Cart;
