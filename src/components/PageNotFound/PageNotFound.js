import React from "react";
import { pages } from "../../constants/pages";
import { Link } from "react-router-dom";
import { useMessage } from "./../../hooks/useMessage";
import "./PageNotFound.css";

const PageNotFound = () => {
    document.title = useMessage("error");

    return (
        <div id="error-404" className="full-width center-align">
            <div className="window-height s-vflex-center">
                <h1 className="error-code">
                    4<span>0</span>4
                </h1>
                <div className="error-text">
                    Page not found
                </div>
                <div className="center-align">
                    <Link to={pages.home} className="btn amber darken-3">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;