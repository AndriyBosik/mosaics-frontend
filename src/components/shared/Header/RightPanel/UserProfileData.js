import React, { useEffect } from "react";
import { user } from "./../../../../stores/UserStore";
import { pages } from "../../../../constants/pages";
import { useMessage } from "../../../../hooks/useMessage";
import "./UserProfileData.css";
import { Link } from "react-router-dom";
import M from "materialize-css";
import {useLink} from "../../../../hooks/useLink";
import {formatLink} from "../../../../handlers/StringHandler";

function UserProfileData() {
    useEffect(() => {
        M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"));
    }, []);

    return (
        <div className="UserProfileData s-vflex-center">
            <div className="z-depth-1 user-avatar border50p stretch-background dropdown-trigger" data-target="info-dropdown" style={{backgroundImage: `url(${user.avatar})`}}></div>
            <ul id="info-dropdown" className="dropdown-content">
                <li>
                    <Link to={useLink(formatLink(pages.profile, {nickname: user.nickname}))} params={{nickname: "andriibosyk"}}>{useMessage("profile")}</Link>
                    <Link to={useLink(pages.login)}>{useMessage("logout")}</Link>
                </li>
            </ul>
        </div>
    );
}

export default UserProfileData;