// App.js
import React, {useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart";
import PaymentPage from "./Pages/PaymentPage/PaymentPage"
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import "./App.css";

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
