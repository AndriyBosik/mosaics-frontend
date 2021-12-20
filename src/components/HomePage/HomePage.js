import React, { useState } from "react";
import Masonry from "react-masonry-component";
import { useMessage } from "../../hooks/useMessage";
import ImageCard from "../ImageCard/ImageCard";
import TileModal from "../modals/TileModal/TileModal";
import { tiles } from "../../data/tiles";

function HomePage() {
    document.title = useMessage("home_page");

    const [tile, setTile] = useState({});

    return (
        <div className="window-width flex-auto EditMosaicPage">
            <div className="container">
                <div className="row pt50">
                    <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                        {
                            tiles.map(tile => <a href="#tile-modal" key={tile.id} onClick={() => setTile(tile)} className="modal-trigger col s6 m4 l3"><ImageCard imageUrl={tile.url} responsiveClassName="full-width" /></a>)
                        }
                    </Masonry>
                </div>
            </div>
            <TileModal modalId="tile-modal" tile={tile} />
        </div>
    );
}

export default HomePage;