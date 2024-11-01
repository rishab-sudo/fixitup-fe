import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography, Divider } from "@mui/material";
import "./PaymentPage.css";

const PaymentPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(""); // Name state
  const [phone, setPhone] = useState(""); // Phone state
  const [address, setAddress] = useState(""); // Address state
  const [city, setCity] = useState(""); // City state
  const [state, setState] = useState(""); // State state
  const [zipCode, setZipCode] = useState(""); // Zip Code state

  // Calculate Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setEmailError(!/\S+@\S+\.\S+/.test(emailValue));
  };

  const handleProceedToPay = async () => {
    const buyerEmail = email;
    const sellerEmail = "shivamdeveloper23@gmail.com";

    const orderDetails = cartItems.map((item) => ({
      name: item.name,
      price: item.price,
      count: item.count,
    }));

    // Collect address details
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

    try {
      await axios.post("http://localhost:5000/api/orders/send-order-confirmation", {
        buyerEmail,
        sellerEmail,
        orderDetails,
        totalPrice,
        addressDetails, // Include address details in the request
      });
      navigate("/payment-process"); // Navigate to the next page
    } catch (error) {
      console.error("Error sending emails:", error);
      alert("Failed to send confirmation emails");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="payment-page">
      <div className="checkout-container">
        {/* User Details Form */}
        <div className="user-details">
          <Typography variant="h5" className="section-heading">
            User Details
          </Typography>
          <TextField
            fullWidth
            label="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={textFieldStyle}
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
          />
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={textFieldStyle}
          />

          <Typography variant="h5" className="section-heading">
            Address
          </Typography>
          <TextField
            fullWidth
            label="Street Address"
            placeholder="Street Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            label="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            label="State"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            sx={textFieldStyle}
          />
          <TextField
            fullWidth
            label="Zip Code"
            placeholder="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            sx={textFieldStyle}
          />
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <Typography variant="h5" className="section-heading">Order Summary</Typography>
          <div className="summary-details">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <p>{item.name} (x{item.count})</p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Price</span>
                  <span style={{ float: "right" }}>
                    ₹{new Intl.NumberFormat("en-IN").format(item.price * item.count)}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <Divider sx={{ my: 2 }} />

          <p className="total-price">
            <strong>Total Price:</strong>
            <span style={{ float: "right" }}>
              ₹{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(totalPrice)}
            </span>
          </p>

          <div className="proceed-button">
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={handleProceedToPay}
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
  '& label.Mui-focused': { color: '#51833a' },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': { borderColor: '#51833a' },
    '&.Mui-focused fieldset': { borderColor: '#51833a' },
  },
};

export default PaymentPage;
