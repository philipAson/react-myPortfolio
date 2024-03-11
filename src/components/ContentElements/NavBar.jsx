import React from "react";
import { IconButton } from "@mui/material";
import motherShipIc from "../../assets/MothershipIc.png";
import Avatar2Ic from "../../assets/Avatar2Ic.png";
import documentIC from "../../assets/ducumentIc.png";

const NavBar = ({ navigateHome, navigateResumé, navigateAbout }) => {
  return (
    <div className="navbar">
      <div className="iconBorder">
        <IconButton className="iconButton" disableRipple onClick={navigateHome}>
          <img src={motherShipIc} alt="home" />
        </IconButton>
      </div>
      <div className="iconBorder">
        <IconButton
          className="iconButton"
          disableRipple
          onClick={navigateResumé}
        >
          <img src={documentIC} alt="resumé" />
        </IconButton>
      </div>
      <div className="iconBorder">
        <IconButton
          className="iconButton"
          disableRipple
          onClick={navigateAbout}
        >
          <img src={Avatar2Ic} alt="about" />
        </IconButton>
      </div>
    </div>
  );
};

export default NavBar;
