import React from "react";
import { user } from "./../../../../stores/UserStore";
import "./UserProfileData.css";

function UserProfileData() {
    return (
        <div className="UserProfileData s-vflex-center">
            <div className="z-depth-1 user-avatar border50p stretch-background" style={{backgroundImage: `url(${user.avatar})`}}></div>
        </div>
    );
}

export default UserProfileData;