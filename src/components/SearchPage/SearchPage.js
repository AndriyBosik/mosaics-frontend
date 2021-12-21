import React, { useState, useEffect } from "react";
import { useMessage } from "./../../hooks/useMessage";
import ImageCard from "../ImageCard/ImageCard";
import TileModal from "../modals/TileModal/TileModal";
import Masonry from "react-masonry-component";
import UserSearchComponent from "./UserSearchComponent/UserSearchComponent";
import M from "materialize-css";
import "./SearchPage.css";
import { useLocation } from "react-router-dom";
import { getUsersByNicknameLike } from "./../../services/UserService";
import { getTilesByTagLike } from "./../../services/TileService";

function SearchPage() {
    document.title = useMessage("search_results");

    const [tile, setTile] = useState({});

    const search = new URLSearchParams(useLocation().search).get("search");
    const users = getUsersByNicknameLike(search);
    const tiles = getTilesByTagLike(search);

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll(".tabs"));
    });

    return (
        <>
            <div className="window-width flex-auto SearchPage">
                <div className="container">
                    <div className="row pt30">
                        <div className="full-width mb10">
                            <ul className="tabs">
                                <li className="tab">
                                    <a href="#tiles" className="active">{useMessage("tiles")}</a>
                                </li>
                                <li className="tab">
                                    <a href="#users">{useMessage("users")}</a>
                                </li>
                            </ul>
                        </div>
                        <div id="tiles" className="full-width">
                            <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                                {
                                    tiles.map(tile => <a href="#tile-modal" key={tile.id} onClick={() => setTile(tile)} className="modal-trigger col s6 m4 l3"><ImageCard imageUrl={tile.url} responsiveClassName="full-width" /></a>)
                                }
                            </Masonry>
                        </div>
                        <div id="users" className="full-width">
                            {
                                users.map(user => <UserSearchComponent key={user.id} className="col s6 m3 mb50" user={user} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <TileModal modalId="tile-modal" tile={tile} />
        </>
    );
}

export default SearchPage;