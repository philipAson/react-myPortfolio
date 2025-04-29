import React from "react";
import { IconButton, Button } from "@mui/material";
import motherShipIc from "../../assets/MothershipIc.png";
import Avatar2Ic from "../../assets/Avatar2Ic.png";
import documentIC from "../../assets/ducumentIc.png";

const NavBar = ({ navigateHome, navigateResumé, navigateAbout }) => {
    return (
        <div className="navbar">
            <Button disableRipple variant="text" onClick={navigateHome}>
                home
            </Button>

            <Button disableRipple onClick={navigateResumé}>
                resumé
            </Button>

            <Button disableRipple onClick={navigateAbout}>
                about
            </Button>
        </div>
    );
};

export default NavBar;
