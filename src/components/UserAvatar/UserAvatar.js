import React from "react";
import { user } from "../../stores/UserStore";
import "./UserAvatar.css";

function UserAvatar() {
    return (
        <div className="UserAvatar s-hflex-center">
            <div className="photo border50p z-depth-1" style={{backgroundImage: `url(${user.avatar})`}}></div>
        </div>
    );
}

export default UserAvatar;