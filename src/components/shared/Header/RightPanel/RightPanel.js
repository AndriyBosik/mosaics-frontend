import React from "react";
import { user } from "../../../../stores/UserStore";
import AuthLinks from "./AuthLinks";
import UserProfileData from "./UserProfileData";
import Langs from "./../Langs/Langs";
import UserMosaics from "../UserMosaics/UserMosaics";

function RightPanel() {
    return (
        <div className="s-hflex-end">
            <Langs />
            {
                user.authorized ? (
                    <>
                        <UserMosaics />
                        <UserProfileData />
                    </>
                ) : (
                    <AuthLinks />
                )
            }
        </div>
    );
}

export default RightPanel;