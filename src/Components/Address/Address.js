import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./Address.css";
import { useSelector, useDispatch } from "react-redux";

export const Address = () => {
  const cartCount = useSelector((state) => state.cart.cart);
  let c = 0;
  cartCount.map((item) => {
    console.log(c, item.count);
    c += item.count;
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check if each field is not empty
    Object.keys(formData).forEach((key) => {
      if (!formData[key] || formData[key].trim() === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    // Update errors state
    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // sendEmail();
    e.preventDefault();
    if (validateForm()) {
      
      emailjs
        .sendForm(
          "service_ufe8yt8",
          "template_bt4ukv6",
          form.current,
          "F5WVhkq5PN8kIzg1e"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Use SweetAlert2 for success
            Swal.fire({
              icon: "success",
              title: "Congratulations!",
              text: "Your order has been placed successfully. Thank you for choosing our services.",
            }).then(() => {
              setFormData({
                fullName: "",
                email: "",
                address: "",
                pincode: "",
                city: "",
                mobileNumber: "",
                // total: "",
                // subtotal: "",
              });
            });
          },
          (error) => {
            console.log(error.text);
            // Use SweetAlert2 for error
            Swal.fire({
              icon: "error",
              title: "FAILED...",
              text: "Something went wrong. Please try again later.",
            });
          }
        );
    }
    
  };

  // const sendEmail = () => {
  //   console.log("Sending email..." + JSON.stringify(formData));
  //   const templateParams = {
  //     quantity: c,
  //     subtotal: c * 349,
  //   };

  //   emailjs
  //     .send(
  //       "service_g35b9hq",
  //       "template_2vqot96",
  //       templateParams,
  //       "bW7s7kHg7ECPTuevt"
  //     )
  //     .then((response) => {
  //       console.log("Email sent successfully:", templateParams);
  //     })
  //     .catch((error) => {
  //       console.error("Email send failed:", error);
  //     });
  // };

  return (
    <Container fluid className="add_container_fluid">
      <Container className="add_content_container">
        <div className="address_top_banner">
          <p className="mt-2" style={{ fontSize: "18px", fontWeight: "600" }}>
            Add Address
          </p>
        </div>

        <div className="address_form_container">
          <h4 className="sperate_text">PERSONAL DETAIL</h4>
          <form ref={form} onSubmit={handleSubmit} className="add_form">
            <div className="add_inputs_div">
              <label htmlFor="fullName">Full Name </label>
              <input
                className="add_inputs"
                placeholder="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <span className="add_errors">{errors.fullName}</span>
              )}
            </div>

            <div className="add_inputs_div">
              <label htmlFor="email">Email</label>
              <input
                className="add_inputs"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="add_errors">{errors.email}</span>
              )}
            </div>

            <div className="add_inputs_div">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                className="add_inputs"
                placeholder="Mobile No."
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              {errors.mobileNumber && (
                <span className="add_errors">{errors.mobileNumber}</span>
              )}
            </div>

            <h4 className="sperate_text">ADDRESS DETAIL</h4>
            <div className="add_inputs_div">
              <label htmlFor="address">Address</label>
              <input
                className="add_inputs"
                placeholder="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="add_errors">{errors.address}</span>
              )}
            </div>

            <div className="flex_div">
              <div className="add_inputs_div">
                <label htmlFor="city">City</label>
                <input
                  className="add_flex_inputs"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && (
                  <span className="add_errors">{errors.city}</span>
                )}
              </div>

              <div className="add_inputs_div ">
                <label htmlFor="pincode">Pin Code</label>
                <input
                  className="add_flex_inputs "
                  placeholder="Pin Code"
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && (
                  <span className="add_errors">{errors.pincode}</span>
                )}
              </div>
              <input type="hidden" name="quantity" value={c} />
              <input type="hidden" name="total" value={c * 349} />
            </div>

            <button className="add_form_btn  mb-2" type="submit">
              Save and Continue
            </button>
          </form>
        </div>
      </Container>
    </Container>
  );
};
