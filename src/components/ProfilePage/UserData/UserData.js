import React from "react";
import { useMessage } from "./../../../hooks/useMessage";
import "./UserData.css";

function UserData({user}) {
    return (
        <div className="s-hflex">
            <div className="ProfileAvatar stretch-background border50p z-depth-2" style={{backgroundImage: `url(${user.avatar})`}}></div>
            <div className="ProfileSocialArea s-vflex px20">
                <div className="ProfileNickname main-color-content pt5">{user.nickname}</div>
                <div className="SocialNetworks flex-auto s-hflex pt10">
                    <div className="SocialItem clickable border50p z-depth-1 stretch-background" style={{backgroundImage: `url(/social/instagram.jpg)`}}></div>
                    <div className="SocialItem clickable border50p ml10 z-depth-1 stretch-background" style={{backgroundImage: `url(/social/twitter.jpg)`}}></div>
                    <div className="SocialItem clickable border50p ml10 z-depth-1 stretch-background" style={{backgroundImage: `url(/social/telegram.jpg)`}}></div>
                </div>
                <div className="mb10">
                    <button className="btn btn-small waves-effect waves-light red">
                        <i className="material-icons left">close</i>{useMessage("complain")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserData;