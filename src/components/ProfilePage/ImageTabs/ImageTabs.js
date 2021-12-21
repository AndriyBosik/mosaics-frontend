import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMessage } from "../../../hooks/useMessage";
import { useLink } from "./../../../hooks/useLink";
import { pages } from "./../../../constants/pages";
import { formatLink } from "../../../handlers/StringHandler";
import Masonry from "react-masonry-component";
import M from "materialize-css";
import "./ImageTabs.css";
import ImageCard from "./../../ImageCard/ImageCard";
import { generateUrl } from "../../../handlers/LinkHandler";

const masonryOptions = {
    transitionDuration: 0
};

function ImageTabs({tiles, mosaics}) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll(".tabs"));
    }, []);

    const navigate = useNavigate();

    const navigateToTiles = id => {
        navigate(generateUrl(formatLink(pages.mosaicTiles, {id: id})));
    }

    return (
        <div id={`image-tabs-${value}`} className="pt20 ImageTabs">
            <div className="full-width mb10">
                <ul className="tabs">
                    <li className="tab" onClick={() => setValue(1 - value)}>
                        <a href="#tiles" className="active">{useMessage("tiles")}</a>
                    </li>
                    <li className="tab" onClick={() => setValue(1 - value)}>
                        <a href="#mosaics">{useMessage("mosaics")}</a>
                    </li>
                </ul>
            </div>
            <div id="tiles" className="full-width">
                <Masonry className={'gallery'} options={masonryOptions} updateOnEachImageLoad={true}>
                    
                    {
                        tiles.map(tile => <ImageCard isClickable={false} key={tile.id} responsiveClassName="col m4 s6" imageUrl={tile.url} imageAlt="tile" />)
                    }

                </Masonry>
            </div>
            <div id="mosaics" className="full-width">
                <Masonry className={'gallery'} options={masonryOptions} updateOnEachImageLoad={true}>

                    {
                        mosaics.map((mosaic, index) => 
                            <div key={mosaic.id} className="col m4 s6" onClick={event => navigateToTiles(mosaic.id)}>
                                <ImageCard responsiveClassName="full-width" imageUrl={mosaic.url} imageAlt="mosaic" />
                            </div>
                        )
                    }

                </Masonry>
            </div>
        </div>
    );
}

export default ImageTabs;