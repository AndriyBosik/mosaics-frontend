import React from "react";
import { user } from "../../../../stores/UserStore";
import AuthLinks from "./AuthLinks";
import UserProfileData from "./UserProfileData";
import Langs from "./../Langs/Langs";
import UserBoards from "../UserBoards/UserBoards";

function RightPanel() {
    return (
        <div className="s-hflex-end">
            <Langs />
            {
                user.authorized ? (
                    <>
                        <UserBoards />
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