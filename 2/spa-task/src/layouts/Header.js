import React from "react";
import { Route, Routes, } from "react-router-dom";
import "../styles/Header.css";

import img1 from "../images/header1.jpg";
import img2 from "../images/header2.jpg";
import img3 from "../images/header3.jpg";

const Header = () => {
    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3);
    const img = images[index];
  return (
    <>
      <Routes>
      <Route path="/" exact element={<img src={img} alt="city" />} />
        <Route path="/products" element={<img src={img} alt="city" />} />
        <Route path="/contact" element={<img src={img} />} />
        <Route path="/admin" element={<img src={img} />} />
        <Route path="*" element={<img src={img} />} />
      </Routes>
    </>
  );
};

export default Header;
