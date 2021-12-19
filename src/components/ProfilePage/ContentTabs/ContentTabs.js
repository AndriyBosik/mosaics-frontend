import React, { useState, useEffect } from "react";
import { useMessage } from "../../../hooks/useMessage";
import Masonry from "react-masonry-component";
import M from "materialize-css";
import "./ContentTabs.css";
import ImageCard from "../../ImageCard/ImageCard";
import Tile from "../../tiles/Tile/Tile";

const masonryOptions = {
    transitionDuration: 100
};

const ContentTabs = ({ tiles }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll(".tabs"));
    });

    return (
        <div id={`image-tabs-${value}`} className="pt20 ContentTabs">
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
                        tiles.map(tile => <Tile responsiveClassName="col m4 s6" key={tile.id} tile={tile} />)
                    }
                </Masonry>
            </div>
            <div id="mosaics" className="full-width">
                <Masonry className={'gallery'} options={masonryOptions} updateOnEachImageLoad={true}>

                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-1.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-2.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-3.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-4.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-5.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-6.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-7.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-8.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-9.jpeg" imageAlt="mosaic" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/mosaics/mosaics-10.jpeg" imageAlt="mosaic" />

                </Masonry>
            </div>
        </div>
    );
}

export default ContentTabs;