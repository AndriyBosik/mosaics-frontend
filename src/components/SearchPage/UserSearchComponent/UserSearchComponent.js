import React from "react";
import "./UserSearchComponent.css";

function UserSearchComponent({user, className}) {
    return (
        <div className={className + " UserSearchComponent s-vflex clickable"}>
            <div className="s-hflex-center">
                <div className="avatar stretch-background border50p z-depth-1" style={{backgroundImage: `url(${user.avatar})`}}></div>
            </div>
            <span className="s-center-align mt10 main-color-content weight-strong nickname">{user.nickname}</span>
        </div>
    );
}

export default UserSearchComponent;