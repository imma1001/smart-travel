import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './layout.css'

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;