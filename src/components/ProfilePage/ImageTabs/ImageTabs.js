import React, { useState, useEffect } from "react";
import { useMessage } from "../../../hooks/useMessage";
import Masonry from "react-masonry-component";
import M from "materialize-css";
import "./ImageTabs.css";
import ImageCard from "./../../ImageCard/ImageCard";

const masonryOptions = {
    transitionDuration: 100
};

function ImageTabs() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        M.Tabs.init(document.querySelectorAll(".tabs"));
    });

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

                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-1.jpg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-2.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-3.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-4.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-5.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-6.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-7.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-8.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-9.jpeg" imageAlt="tile" />
                    <ImageCard responsiveClassName="col m4 s6" imageUrl="/tiles/tiles-10.jpeg" imageAlt="tile" />

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

export default ImageTabs;