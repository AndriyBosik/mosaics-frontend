import React, { useEffect } from "react";
import { useMessage } from "./../../hooks/useMessage";
import ImageCard from "../ImageCard/ImageCard";
import Masonry from "react-masonry-component";
import UserSearchComponent from "./UserSearchComponent/UserSearchComponent";
import M from "materialize-css";
import "./SearchPage.css";
import { images } from "./../../data/images";
import { users } from "./../../data/users";

function SearchPage() {
    document.title = useMessage("search_results");

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll(".tabs"));
    });

    return (
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
                                images.map(image => <ImageCard key={image.id} imageUrl={image.url} responsiveClassName="col s6 m4 l3" />)
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
    );
}

export default SearchPage;