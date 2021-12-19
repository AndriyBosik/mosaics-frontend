import React from "react";
import { Link } from "react-router-dom";
import { pages } from "./../../constants/pages";

const HomeLink = () => {
    return (
        <Link to={pages.home} className="btn amber darken-3">
            Go Home
        </Link>
    );
}

export default HomeLink;