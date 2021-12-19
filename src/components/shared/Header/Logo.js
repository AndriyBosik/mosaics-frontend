import React from "react";
import { application } from "./../../../constants/application";
import "./Logo.css";

function Logo() {
    return (
        <div className="NavbarLogo">
            {application.name}
        </div>
    );
}

export default Logo;