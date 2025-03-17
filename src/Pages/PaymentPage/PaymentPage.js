import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/CartSlice";
import axios from "axios";
import Swal from "sweetalert2";
import {
  TextField,
  Button,
  Typography,
  Divider,
  CircularProgress,
} from "@mui/material";
import "./PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!/\S+@\S+\.\S+/.test(emailValue));
  };

  const isFormIncomplete = !(
    name &&
    email &&
    !emailError &&
    phone &&
    address &&
    city &&
    state &&
    zipCode
  );

  const handleProceedToPay = async () => {
    const buyerEmail = email;
    const sellerEmail = "contactfixitupinfo@gmail.com";

    const orderDetails = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      count: item.count,
    }));

    const addressDetails = {
      name,
      email: buyerEmail,
      phone,
      address,
      city,
      state,
      zipCode,
    };

    setLoading(true);
    const param = {
      buyerEmail,
      sellerEmail,
      orderDetails,
      totalPrice,
      addressDetails,
    };

    try {
      // https://fixitup-6f381f0c1b86.herokuapp.com/api/orders/send-order-confirmation
      // http://localhost:5000/api/orders/send-order-confirmation
      await axios.post(
        "http://localhost:5001/api/orders/send-order-confirmation",
        param
      );

      dispatch(clearCart());
      Swal.fire({
        title: "Order Submitted!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
        timer: 3000,
        position: "center",
      }).then(() => {
        navigate("/payment-process");
      });
    } catch (error) {
      console.error("Error sending emails:", error);
      Swal.fire({
        title: "Submission Failed",
        text: "Failed to send confirmation emails",
        icon: "error",
        confirmButtonText: "Try Again",
        position: "center",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress
          style={{ color: "#b33b72", width: "50px", height: "50px" }}
        />
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="checkout-container">
        {/* User Details Form */}
        <div className="user-details">
          <Typography variant="h5" className="section-heading mb-3">
            User Details
          </Typography>
          <TextField
            fullWidth
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={textFieldStyle}
            required
          />
          <TextField
            fullWidth
            label="Email"
            placeholder="Email address"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
            sx={textFieldStyle}
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={textFieldStyle}
            required
          />

          <Typography variant="h5" className="section-heading mb-3">
            Address
          </Typography>
          <TextField
            fullWidth
            label="Street Address"
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={textFieldStyle}
            required
          />
          <TextField
            fullWidth
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={textFieldStyle}
            required
          />
          <TextField
            fullWidth
            label="State"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            sx={textFieldStyle}
            required
          />
          <TextField
            fullWidth
            label="Zip Code"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            sx={textFieldStyle}
            required
          />
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <Typography variant="h5" className="section-heading">
            Order Summary
          </Typography>
          <div className="summary-details">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <p>
                  {item.name} (x{item.count})
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Price</span>
                  <span style={{ float: "right" }}>
                    ₹
                    {new Intl.NumberFormat("en-IN").format(
                      item.price * item.count
                    )}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <Divider sx={{ my: 2 }} />

          <p className="total-price">
            <strong>Total Price:</strong>
            <span style={{ float: "right" }}>
              ₹
              {new Intl.NumberFormat("en-IN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(totalPrice)}
            </span>
          </p>

          <div className="proceed-button">
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleProceedToPay}
              disabled={isFormIncomplete}
            >
              Proceed to Pay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const textFieldStyle = {
  mb: 2,
  "& label.Mui-focused": { color: "#51833a" },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": { borderColor: "#51833a" },
    "&.Mui-focused fieldset": { borderColor: "#51833a" },
  },
};

export default PaymentPage;
