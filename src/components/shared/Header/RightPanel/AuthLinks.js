import React from "react";
import { Link } from "react-router-dom";
import { pages } from "../../../../constants/pages";
import { useLink } from "./../../../../hooks/useLink";
import { useMessage } from "../../../../hooks/useMessage";
import "./AuthLinks.css";

function AuthLinks() {
    return (
        <ul className="right">
            <li className="AuthLink upprcase weight-strong">
                <Link to={useLink(pages.login)}>
                    <i className="material-icons left">login</i>{useMessage("login")}
                </Link>
            </li>
            <li className="AuthLink upprcase weight-strong">
                <Link to={useLink(pages.register)}>
                    <i className="material-icons left">account_circle</i>{useMessage("register")}
                </Link>
            </li>
        </ul>
    );
}

export default AuthLinks;