import React, { useEffect } from "react";
import M from "materialize-css";
import TileTag from "../../TileTag/TileTag";
import "./TileModal.css";
import { Link } from "react-router-dom";
import { useLink } from "./../../../hooks/useLink";
import { formatLink } from "../../../handlers/StringHandler";
import { pages } from "./../../../constants/pages";

const TileModal = ({modalId, tile}) => {
    useEffect(() => {
        M.Modal.init(document.querySelectorAll(".modal"), {})
    }, []);

    const link = formatLink(useLink(pages.profile), {nickname: tile.user ? tile.user.nickname : ""});

    return (
        <div id={modalId} className="modal TileModal">
            <div className="modal-content">
                <div className="row m0">
                    <div className="col m6 s12">
                        <img className="z-depth-3 full-width" src={tile.url} alt="here must be a tile, but sorry :(" />
                    </div>
                    <div className="col m6 s12">
                        <Link to={link} className="profile-link">
                            <div className="s-hflex mb10">
                                <div className="s-hflex clickable">
                                    <div className="z-depth-1 user-avatar border50p stretch-background" style={{backgroundImage: `url(${tile.user ? tile.user.avatar : ""})`}}></div>
                                    <div className="weight-strong main-color-content px10 s-vflex-center">
                                        {tile.user ? tile.user.nickname : ""}
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="full-width auto-height">
                            {
                                tile.tags ? tile.tags.map((tag, index) => <TileTag key={index} tag={tag} />) : null
                            }
                        </div>
                        <div className="mt5">
                            {
                                tile.link == null ? null : (
                                    <a href={tile.link} className="weight-strong" target="_blank">Open resource</a>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TileModal;