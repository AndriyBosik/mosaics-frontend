import React, { useState, useEffect } from "react";
import { useMessage } from "../../hooks/useMessage";
import UserData from "./UserData/UserData";
import ImageTabs from "./ImageTabs/ImageTabs";
import { useParams } from "react-router-dom";
import { users } from "./../../data/users";
import { tiles } from "./../../data/tiles";
import { mosaics } from "./../../data/mosaics";

function ProfilePage() {
    document.title = useMessage("profile");

    const { nickname } = useParams();

    const user = users.find(user => user.nickname === nickname);

    return (
        <div className="window-width flex-auto">
            <div className="container">
                <div className="row pt30">
                    <UserData user={user} />
                    <div className="full-width"></div>
                    <ImageTabs tiles={tiles} mosaics={mosaics} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;