import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMessage } from "../../hooks/useMessage";
import Masonry from "react-masonry-component";
import { getMosaicTiles } from "./../../services/MosaicService";
import ImageCard from "./../ImageCard/ImageCard";
import TileModal from "../modals/TileModal/TileModal";

const MosaicTilesPage = () => {
    document.title = useMessage("view_tiles");

    const [tiles, setTiles] = useState([]);
    const [tile, setTile] = useState({});

    const { id } = useParams();

    useEffect(() => {
        setTiles(getMosaicTiles(id));
    }, []);

    return (
        <>
            <div className="window-width flex-auto">
                <div className="container">
                    <div className="row pt50">
                        <Masonry className={'gallery'} options={{transitionDuration: 100}} updateOnEachImageLoad={true}>
                            {
                                tiles.map(tile => <a href="#tile-modal" onClick={() => setTile(tile)} key={tile.id} className="modal-trigger col s6 m4 l3"><ImageCard imageUrl={tile.url} responsiveClassName="full-width" /></a>)
                            }
                        </Masonry>
                    </div>
                </div>
            </div>
            <TileModal modalId="tile-modal" tile={tile} />
        </>
    );
}

export default MosaicTilesPage;