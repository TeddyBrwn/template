import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Layout chính */}
        <Route path="/" element={<Layout />}>
          {/* Các trang con */}
          <Route index element={<Home />} /> {/* Home là trang mặc định */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
