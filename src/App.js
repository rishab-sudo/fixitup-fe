// App.js
import React, { Fragment, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home/Home";
import Cart from "./Pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import { Address } from "./Components/Address/Address";
import PaymentPage from "./Components/PaymentPage/PaymentPage";

function App() {
  return (
    <>
   
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Provider>
    </>
  );
}

export default App;

// Hello Fixitup, Customer Address Details..

//   Name: {{fullName}}

// Email : {{email}}

// Mobile-Number : {{mobileNumber}}

// Address : {{address}}

// City : {{city}}

// Pincode: {{pincode}}

// Quantity : {{quantity}}

// Total : {{total}}

// Thank You..!
