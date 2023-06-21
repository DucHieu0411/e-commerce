import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import OurStore from "./pages/OurStore/OurStore";
import Blogs from "./pages/Blogs/Blogs";
import CompareProduct from "./pages/CompareProduct/CompareProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import ForgotPassWord from "./pages/ForgotPassWord/ForgotPassWord";
import SignUp from "./pages/SignUp/SignUp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions/TermAndContions";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassWord />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-contions" element={<TermAndContions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
