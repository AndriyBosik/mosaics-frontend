import React from "react";
import { useNavigate } from "react-router-dom";
import { pages } from "../../../constants/pages";
import { generateUrl } from "../../../handlers/LinkHandler";
import { formatLink } from "../../../handlers/StringHandler";
import "./UserSearchComponent.css";

function UserSearchComponent({user, className}) {
    const navigate = useNavigate();

    const navigateToUserProfile = () => {
        navigate(generateUrl(formatLink(pages.profile, {nickname: user.nickname})));
    }

    return (
        <div className={className + " UserSearchComponent s-vflex clickable"} onClick={navigateToUserProfile}>
            <div className="s-hflex-center">
                <div className="avatar stretch-background border50p z-depth-1" style={{backgroundImage: `url(${user.avatar})`}}></div>
            </div>
            <span className="s-center-align mt10 main-color-content weight-strong nickname">{user.nickname}</span>
        </div>
    );
}

export default UserSearchComponent;