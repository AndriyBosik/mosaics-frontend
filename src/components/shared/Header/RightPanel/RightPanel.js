import React from "react";
import AuthLinks from "./AuthLinks";
import UserProfileData from "./UserProfileData";
import Langs from "./../Langs/Langs";
import UserMosaics from "../UserMosaics/UserMosaics";
import { getUser } from "./../../../../states/UserState";

function RightPanel() {
    const user = getUser();

    return (
        <div className="s-hflex-end">
            <Langs />
            {
                user != null ? (
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