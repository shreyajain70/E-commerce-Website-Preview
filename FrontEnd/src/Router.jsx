import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Body } from "./Components/MainBodySection/Body";
import { Main } from "./main";
import AboutUs from "./Components/Pages/AboutUs";
import ContactUs from "./Components/Pages/ContactUs";
import CartSection from "./Components/Pages/CartSection";
import SignUpPage from "./Components/Register Pages/SignUpPage";
import { LoginInPage } from "./Components/Register Pages/LogInPage";
import { ProductDetails } from "./Components/AboutProduct/ProductDetails";
export function FullRouter(){
    return(
        <>
 <BrowserRouter basename="/">
  <Routes>
    {/* Main layout with header and footer */}
    <Route path="/" element={<Main />}>
      <Route path="/Home" element={<Body />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/AddToCart" element={<CartSection />} />
      <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
      {/* You can add other routes that need header/footer here */}
    </Route>

    {/* Routes WITHOUT header/footer */}
    <Route path="/SignUpPage" element={<SignUpPage />} />   
    <Route path="/LogInPage" element={<LoginInPage />} />
  </Routes>
</BrowserRouter>

        </>
    )
}