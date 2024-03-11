import React, { useState } from "react";
import Header from "./ContentElements/Header";
import NavBar from "./ContentElements/NavBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../components/ContentElements/Home";
import Resumé from "./ContentElements/Resumé";
import About from "./ContentElements/About";
import OldDialog from "./ContentElements/OldDialog"

const OverlayMenu = () => {
  const navigate = useNavigate();

  const navigateHome = () => navigate("/");
  const navigateResumé = () => navigate("/resumé");
  const navigateAbout = () => navigate("/about");

  return (
    <div className="OverlayContainer">
      <div className="TopRow">
        <Header />
        <NavBar
          navigateHome={navigateHome}
          navigateResumé={navigateResumé}
          navigateAbout={navigateAbout}
        />
      </div>

      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resumé" element={<Resumé />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* <OldDialog/> */}
    </div>
  );
};

export default OverlayMenu;
